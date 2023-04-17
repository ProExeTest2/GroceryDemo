import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../helper/responsive'
import { icons } from '../helper/iconsConstants'

const MenuCard = ({image,title,onPress}:any) => {
  return (
      <Pressable style={styles.maincontainer} onPress={onPress}>
          <Image style={styles.img} source={icons.cardimg } />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default MenuCard

const styles = StyleSheet.create({
    maincontainer: {
        height: hp(20),
        width:wp(45),
        padding: hp(3),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 5,
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 5,

elevation: 7,  
    },
    title: {
        marginVertical: 10,
        fontSize:15,
        fontWeight: 'bold',
        color:'black'
    },
    img: {
        height: hp(10),
        width: hp(10),
        backgroundColor: 'skyblue',
        borderRadius:10
}})