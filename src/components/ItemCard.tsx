import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../helper/responsive';
import {icons} from '../helper/iconsConstants';

const ItemCard = ({
  image,
  name,
  minquantity,
  onPressPlus,
  onPressMinus,
  quantity,
  qr,
}: any) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  return (
    <View style={styles.maincontainer}>
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
          <Text style={{color: 'black', marginHorizontal: 5}}>{quantity}</Text>
          <Pressable onPress={onPressPlus}>
            <Image style={styles.icon} source={icons.plus} />
          </Pressable>
        </View>
        <Pressable
          //style={{alignSelf: 'flex-end'}}
          onPress={() => setIsAddedToCart(!isAddedToCart)}>
          <Image
            style={{height: hp(3), width: hp(3)}}
            source={isAddedToCart ? icons.check : icons.cart}
          />
        </Pressable>

        {/* <Image source={icons.cart} /> */}
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  maincontainer: {
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
  icon: {
    height: hp(2.5),
    width: hp(2.5),
  },
});
