import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '../helper/iconsConstants'
import { hp, wp } from '../helper/responsive'

const SearchBar = () => {
  return (
      <View style={styles.maincontainer}>
          <Image style={styles.searchimg} source={icons.search} />
          <Text >  Search here for groceries</Text>
      {/* <TextInput te placeholder='Search here for groceries'/> */}
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        borderColor: '#b3b3b3',
        borderWidth: 1,
        height: hp(4.5),
        width:wp(90),
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 5, marginVertical: 13,
       
    },
    searchimg: {
        height: 14,
        width:14
}})