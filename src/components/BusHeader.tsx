import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {icons} from '../helper/iconsConstants';

const BusHeader = () => {
  return (
    <View
      style={[
        styles.maincontainer,
        {
          height: getStatusBarHeight(),
        },
      ]}>
      <Image style={styles.icon} source={icons.bus} />
      <Text style={styles.header}>Bus Routes</Text>
      <Pressable onPress={() => {}}>
        <Image style={styles.icon} source={icons.addbus} />
      </Pressable>
    </View>
  );
};

export default BusHeader;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#233911',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 23,
    color: 'white',
  },
  icon: {
    tintColor: 'white',
    height: 28,
    width: 28,
  },
}); //
