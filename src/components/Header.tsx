import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { wp } from '../helper/responsive'
import { icons } from '../helper/iconsConstants'

const Header = ({title,OnPressLeftIcon,OnPressRightIcon,isCart,isInititalScreen}:any) => {
  return (
      <View style={styles.maincontainer}>
          <Pressable onPress={OnPressLeftIcon}>
          {
            isInititalScreen
              ? <Image style={styles.menuicon} source={icons.menu} />
              : <Image style={styles.menuicon} source={icons.back}/>                  
            }
          </Pressable>        
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={OnPressRightIcon}>
          {
            isCart
              ? <Text style={styles.lefttxt}>Subtitution Preference</Text>
              : <Image style={styles.menuicon} source={icons.cart} />
          }
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width:wp(100),
        height: getStatusBarHeight(),
        alignItems: 'center',
    paddingHorizontal: 15,
        backgroundColor:"#fff"
    },
    title: {
        fontSize: 23,
        color:'black'
    },
    menuicon: {
        height: 24,
        width:24
    },
    lefttxt: {
        fontSize: 14,
        color: '#e69b00',
        maxWidth:wp(20)
    }
})