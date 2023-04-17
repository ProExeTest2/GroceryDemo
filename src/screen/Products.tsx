import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductData} from '../helper/Data/ProductData';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {hp, wp} from '../helper/responsive';
import {useIsFocused} from '@react-navigation/native';
import {icons} from '../helper/iconsConstants';
import {useDispatch, useSelector} from 'react-redux';
import {AddProductCartAction} from '../redux/action/ProductsAction';

const Products = ({navigation, route}: any) => {
  console.log('PRODUCTS===>', route?.params?.itemTitle);
  const cartProducts = useSelector(
    (state: unknown) => state?.product?.selectedproducts,
  );
  const [totalPriceCount, setTotalPriceCount] = useState(0);
  const isFocused = useIsFocused();
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) {
      ProductData.find((item, index) => {
        if (item.title == route?.params?.itemTitle) {
          let temp: any = ProductData[index].products;
          const temp2: any = temp?.map((currentValue: any, index: any) => {
            return {
              ...currentValue,
              isAddedToCart: false,
              quantity: 1,
              index: index,
            };
          });

          const temp3: any = temp2?.map(
            (e: any) => (
              (e.isAddedToCart =
                cartProducts.find((a: any) => a.index == e.index)
                  ?.isAddedToCart || e.isAddedToCart),
              (e.quantity =
                cartProducts.find((a: any) => a.index == e.index)?.quantity ||
                e.quantity),
              e
            ),
          );
          setAllProducts(temp3);
          console.log('TEMP3 ', temp3);
        }
      });
    }
  }, [isFocused]);

  const onPressMinus = (index: any) => {
    const temp: any[] = allProducts?.map((currentValue: never[], i: number) => {
      if (i === index) {
        const price = totalPriceCount - Number(currentValue?.price);
        setTotalPriceCount(price);
        const count = Number(currentValue?.quantity) - 1;
        console.log('COUNT ', currentValue?.quantity);
        if (count === 0) {
          return {...currentValue, isAddedToCart: false};
        } else {
          return {...currentValue, quantity: count};
        }
      } else {
        return currentValue;
      }
    });
    setAllProducts(temp);
  };

  const onPressPlus = (index: any) => {
    const temp: any[] = allProducts?.map((currentValue: never[], i: number) => {
      if (i === index) {
        const price = totalPriceCount + Number(currentValue?.price);
        setTotalPriceCount(price);
        const count = Number(currentValue?.quantity) + 1;
        //console.log('COUNTfdfdfd ', count);
        console.log('...currentValue, quantity: count  ', currentValue, count);
        return {...currentValue, quantity: count};
      } else {
        return currentValue;
      }
    });
    setAllProducts(temp);
    console.log('TEMP------plus', temp);
  };

  const onPressCart = (index: any) => {
    const temp: any[] = allProducts?.map((currentValue: never[], i: number) => {
      console.log(i, index);
      if (i == index) {
        console.log('inside if', allProducts[i].isAddedToCart);
        let isChecked = allProducts[i].isAddedToCart;
        return {...currentValue, isAddedToCart: !isChecked};
      } else {
        console.log('inside else');
        return currentValue;
      }
    });
    setAllProducts(temp);
  };

  const ProductListCard = ({
    image,
    name,
    minquantity,
    onPressPlus,
    onPressMinus,
    onPressCart,
    quantity,
    qr,
    isAddedToCart,
  }: any) => {
    const [isFavourite, setIsFavourite] = useState(false);
    //const [isAddedToCart, setIsAddedToCart] = useState(false);
    //console.log(quantity);
    return (
      <View style={styles.cardmaincontainer}>
        <Pressable
          style={{alignSelf: 'flex-end'}}
          onPress={() => setIsFavourite(!isFavourite)}>
          <Image
            style={styles.icon}
            source={isFavourite ? icons.yellowstar : icons.star}
          />
        </Pressable>
        <Image style={styles.img} source={icons.cardimg} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.quantity}>
          QR {qr} | {minquantity}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Pressable onPress={onPressMinus}>
              <Image style={styles.icon} source={icons.minus} />
            </Pressable>
            <Text style={{color: 'black', marginHorizontal: 5}}>
              {quantity}
            </Text>
            <Pressable onPress={onPressPlus}>
              <Image style={styles.icon} source={icons.plus} />
            </Pressable>
          </View>
          <Pressable
            //style={{alignSelf: 'flex-end'}}
            onPress={onPressCart}>
            {isAddedToCart ? (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={icons.check}
              />
            ) : (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={icons.cart}
              />
            )}
          </Pressable>

          {/* <Image source={icons.cart} /> */}
        </View>
      </View>
    );
  };
  const onPressBack = () => {
    let t: any[] = [];
    allProducts?.map((currentValue: never[]) => {
      console.log('CURRENT VALUE 2222', currentValue);
      if (currentValue?.quantity > 0 && currentValue?.isAddedToCart == true) {
        t.push(currentValue);
        return {t};
        //return { ...currentValue, isSelected: true };
      } else {
        return {currentValue};
      }
    });

    //dispatch(AddProductCartAction(t));
    t.length > 0 ? dispatch(AddProductCartAction(t)) : null;
  };

  if (allProducts == null || undefined) {
    return (
      <SafeAreaView style={styles.maincontainer}>
        <Header
          title={'ProductDetails'}
          OnPressLeftIcon={() => {
            onPressBack();
            navigation.goBack();
          }}
          OnPressRightIcon={() => {
            onPressBack();
            navigation.navigate('Cart');
          }}
        />
        <SearchBar />
        <Text>NO PRODUCTS FOUND</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <Header
        title={'ProductDetails'}
        OnPressLeftIcon={() => {
          onPressBack();
          navigation.goBack();
        }}
        OnPressRightIcon={() => {
          onPressBack();
          navigation.navigate('Cart');
        }}
      />
      <SearchBar />
      <FlatList
        style={{width: wp(100)}}
        data={allProducts}
        numColumns={2}
        renderItem={({item, index}) => {
          //console.log('carttrue', carttrue);
          //console.log('cartproducts', cartProducts);

          return (
            <ProductListCard
              name={item?.name}
              minquantity={item?.minquantity}
              qr={item?.qr}
              quantity={item?.quantity}
              isAddedToCart={item?.isAddedToCart}
              onPressPlus={() => {
                onPressPlus(index);
              }}
              onPressMinus={() => {
                onPressMinus(index);
              }}
              onPressCart={() => {
                onPressCart(index);
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  cardmaincontainer: {
    //height: hp(20),
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#b7b7b7',
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
    padding: 8,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  icon: {
    height: hp(2.5),
    width: hp(2.5),
  },
  title: {
    //marginVertical: 10,
    fontSize: 14,
    fontWeight: '600',
    //color: 'black',
  },
  quantity: {
    marginVertical: 5,
    fontSize: 12,
    fontWeight: '500',
  },
  img: {
    height: hp(8),
    width: hp(10),
    // backgroundColor: 'skyblue',
    borderRadius: 10,
    marginVertical: 10,
  },
});
//   cartProducts.some((t: any) => {
//     console.log('TEMP', temp);
//     console.log('temp.index   t.index', temp.index, t.index);
//     if (temp.index === t.index) {
//       console.log('inside if');
//       return {
//         ...currentValue,
//         isAddedToCart: t.isAddedToCart,
//         quantity: t.quantity,
//         index: index,
//       };
//       // item.isAddedToCart = t.isAddedToCart;
//       // item.quantity = t.quantity;
//     } else {
//       console.log('inside else');
//       return {
//         ...currentValue,
//         isAddedToCart: false,
//         quantity: 1,
//         index: index,
//       };
//     }
//   });
// });
// const res = cartProducts.reduce((acc: any, curr: any) => {
//   const stored = temp.find(
//     ({name}: any, currentValue: any) => name === curr.name,
//   );
//   console.log('currentValue', stored);
//   if (stored) {
//     stored.isAddedToCart = curr.isAddedToCart;
//     stored.quantity = curr.quantity;
//     acc.push(stored);
//   } else {
//     console.log('inside else', curr);
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log('RES ', res);

//setAllProducts(temp2);
// }
// });
{
  /**allProducts?.map((currentValue: never[]) => {
      //console.log('CURRENT VALUE 2222', currentValue);
      if (currentValue.quantity > 0 && currentValue.isAddedToCart == true) {
        t.push(currentValue);
        return {t};
        //return { ...currentValue, isSelected: true };
      } else {
        return {currentValue};
      }
    });
    console.log('TEMP___T', t);
    dispatch(AddProductCartAction(t)); */
}
// console.log('TEMP------cart', temp);
