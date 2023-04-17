import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../helper/iconsConstants';

const BusCard = ({
  endTime,
  kilometers,
  remarks,
  route,
  scheduleNo,
  startTime,
  type,
}: any) => {
  const [myArray, setmyArray] = useState([]);
  useEffect(() => {
    let text = route.toString();
    const tmparr = text.split(' ');
    setmyArray(tmparr);
  }, []);
  return (
    <View style={styles.resultcard}>
      <View style={styles.kmcontainer}>
        <Text style={styles.kmnumber}>{kilometers.toString()}</Text>
        <Text style={styles.km}>km</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          marginHorizontal: 10,
        }}>
        <FlatList
          data={myArray}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return index == 0 ? (
              <View>
                <Text style={styles.stationname}>{item}</Text>
                <Text style={styles.stationname}>{startTime}</Text>
              </View>
            ) : index == myArray.length - 1 ? (
              <>
                <Image style={styles.arrow} source={icons.twoarrow} />
                <View>
                  <Text style={styles.stationname}> {item}</Text>
                  <Text style={styles.stationname}>{endTime}</Text>
                </View>
              </>
            ) : (
              <>
                <Image style={styles.arrow} source={icons.twoarrow} />
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.stationname}> {item}</Text>
                </View>
              </>
            );
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={styles.redtext}>{remarks}</Text>
          <Text style={styles.redtext}>શી.નં - {scheduleNo}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.stationname,
          {
            backgroundColor: 'gray',
            padding: 5,
            borderRadius: 5,
            color: 'white',
            // alignSelf: 'center',
          },
        ]}>
        {type.toString()}
      </Text>
    </View>
  );
};

export default BusCard;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  resultcard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    marginVertical: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  stationname: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  arrow: {
    height: 25,
    width: 25,
    tintColor: 'gray',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  redtext: {
    fontSize: 15,
    color: 'red',
  },
  kmnumber: {
    fontSize: 14,
    color: 'red',
    fontWeight: '600',
  },
  km: {fontWeight: '500', fontSize: 14, color: 'black'},
  kmcontainer: {
    height: 55,
    width: 55,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 27,
  },
  textinput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    flex: 1,
    padding: 10,
  },
});

// <View style={styles.resultcard}>
//   <View style={styles.kmcontainer}>
//     <Text style={styles.kmnumber}>{kilometers.toString()}</Text>
//     <Text style={styles.km}>km</Text>
//   </View>
//   <View>
//     <Text style={styles.stationname}>{route.toString()}</Text>
//     <Text style={styles.stationname}>{startTime.toString()}</Text>
//     <Text style={[styles.redtext, {fontSize: 15}]}>{remarks}</Text>
//   </View>
//   <Image style={styles.arrow} source={icons.twoarrow} />
//   <View>
//     {/* <Text style={styles.stationname}>{item.to.toString()}</Text> */}
//     <Text style={styles.stationname}>{endTime.toString()}</Text>
//     <Text style={[styles.redtext, {alignSelf: 'flex-end'}]}>
//       શી.નં - {scheduleNo.toString()}
//     </Text>
//   </View>

//   <Text
//     style={[
//       styles.stationname,
//       {
//         backgroundColor: 'gray',
//         padding: 5,
//         borderRadius: 5,
//         color: 'white',
//         alignSelf: 'flex-start',
//       },
//     ]}>
//     {type.toString()}
//   </Text>
// </View>
