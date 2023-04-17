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
import Header from '../components/Header';
import TotalText from '../components/TotalText';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {hp, wp} from '../helper/responsive';
import {icons} from '../helper/iconsConstants';
import {AddProductCartAction} from '../redux/action/ProductsAction';

const Cart = ({navigation}: any) => {
  const cartProducts = useSelector(
    (state: unknown) => state?.product?.selectedproducts,
  );
  const [totalPriceCount, setTotalPriceCount] = useState(0);
  const isFocused = useIsFocused();
  const [allProducts, setAllProducts] = useState(cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) {
      let tp = 0;
      const temp2: any = cartProducts?.map((currentValue: any, index: any) => {
        console.log(currentValue.quantity * currentValue.price);
        tp = tp + Number(currentValue.quantity * currentValue.price);
        console.log('tp', tp);
      });
      setTotalPriceCount(tp);
    }
  }, [isFocused, cartProducts]);

  const onPressMinus = (index: any) => {
    const temp: any[] = cartProducts?.map(
      (currentValue: never[], i: number) => {
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
      },
    );
    setAllProducts(temp);
    dispatch(AddProductCartAction(temp));
  };

  const onPressPlus = (index: any) => {
    const temp: any[] = cartProducts?.map(
      (currentValue: never[], i: number) => {
        console.log('COUNTfdfdfd ', currentValue);
        if (i === index) {
          const price = totalPriceCount + Number(currentValue?.price);
          setTotalPriceCount(price);
          const count = Number(currentValue?.quantity) + 1;
          console.log(
            '...currentValue, quantity: count  ',
            currentValue,
            count,
          );
          return {...currentValue, quantity: count};
        } else {
          return currentValue;
        }
      },
    );
    setAllProducts(temp);
    dispatch(AddProductCartAction(temp));
    console.log('TEMP------plus', temp);
  };

  console.log('cartProducts', cartProducts);
  const CartProduct = ({
    name,
    minquantity,
    price,
    onPressPlus,
    onPressMinus,
    quantity,
  }: any) => {
    return (
      <View style={styles.cartmaincontainer}>
        <Image style={styles.img} source={icons.cardimg} />
        <View
          style={{flex: 1, justifyContent: 'space-between', marginLeft: 10}}>
          <Text
            style={[
              styles.name,
              {color: 'black', fontWeight: 'bold', fontSize: 15},
            ]}>
            {name}
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            {quantity} * {minquantity}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 8,
            }}>
            <Pressable onPress={onPressMinus}>
              <Image style={styles.icon} source={icons.minus} />
            </Pressable>

            <Text
              style={{
                color: 'black',
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              {quantity}
            </Text>
            <Pressable onPress={onPressPlus}>
              <Image style={styles.icon} source={icons.plus} />
            </Pressable>
          </View>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          QR {price * quantity}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        title={'Cart'}
        OnPressLeftIcon={() => navigation.goBack()}
        isCart={true}
      />
      <Pressable style={styles.clearcart} onPress={() => {}}>
        <Text style={styles.cleartext}>Clear Cart</Text>
      </Pressable>
      <View style={styles.maincontainer}>
        <View style={{flex: 1}}>
          <FlatList
            //style={{width: wp(100)}}
            data={cartProducts}
            renderItem={({item, index}) => (
              <CartProduct
                name={item.name}
                minquantity={item.minquantity}
                price={item.price}
                onPressPlus={() => {
                  onPressPlus(index);
                }}
                onPressMinus={() => {
                  onPressMinus(index);
                }}
                quantity={item.quantity}
              />
            )}
          />
        </View>
        <TotalText title={'Net Total'} count={totalPriceCount} />
        <TotalText title={'Delivery Charges'} count={50} />
        <Pressable onPress={() => {}}>
          <TotalText
            style={{
              backgroundColor: '#e69b00',
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
            title={'Proceed to Check Out'}
            count={totalPriceCount + 50}
            textColor={'#fff'}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  clearcart: {
    backgroundColor: '#03254c',
    padding: 10,
    alignItems: 'flex-end',
  },
  cleartext: {
    color: '#fff',
    fontSize: 15,
  },
  cartmaincontainer: {
    flexDirection: 'row',
    //width: wp(100),
    paddingVertical: 10,
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  img: {
    height: hp(8),
    width: hp(10),
    borderRadius: 10,
    marginTop: 5,
  },
  name: {},
  icon: {
    height: hp(2.5),
    width: hp(2.5),
  },
});
