import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TotalText = ({title,count,textColor,style}:any) => {
  return (
    <View style={[styles.maincontainer,style]}>
          <Text style={[styles.title,{color:textColor}]}>{title}</Text>
          <Text style={[styles.title,{color:textColor}]}>QR { count}</Text>
    </View>
  )
}

export default TotalText

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', marginVertical: 2,
        borderRadius: 5,
        // paddingVertical: 10,
        // paddingHorizontal:5
    }, title: {
        fontSize: 15,
        color: 'black',
        fontWeight:'700'
},})