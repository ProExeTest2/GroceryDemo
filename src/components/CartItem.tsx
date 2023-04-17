import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../helper/responsive';
import {icons} from '../helper/iconsConstants';

const CartItem = ({
  name,
  minquantity,
  price,
  onPressPlus,
  onPressMinus,
  quantity,
}: any) => {
  return (
    <View style={styles.maincontainer}>
      <Image style={styles.img} source={icons.cardimg} />
      <View style={{flex: 1, justifyContent: 'space-between', marginLeft: 10}}>
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
          <Pressable onPress={onPressPlus}>
            <Image style={styles.icon} source={icons.plus} />
          </Pressable>
          <Text
            style={{color: 'black', marginHorizontal: 3, fontWeight: 'bold'}}>
            {' '}
            {quantity}{' '}
          </Text>
          <Pressable onPress={onPressMinus}>
            <Image style={styles.icon} source={icons.minus} />
          </Pressable>
        </View>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>QR {price}</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  maincontainer: {
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
