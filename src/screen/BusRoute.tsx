import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../helper/iconsConstants';
import BusCard from '../components/BusCard';
import BusHeader from '../components/BusHeader';
import Translator from 'react-native-translator';
import customData from '../helper/Data/BusData.json';

const BusRoute = () => {
  const [BusData, setBusData] = useState([]);
  const [From, setFrom] = useState('');
  const [To, setTo] = useState('');
  const [ResultFrom, setResultFrom] = useState('');
  const [ResultTo, setResultTo] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setBusData(customData);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      SearchFromToFunction(From, To);
    }, 3000);
  }, [From, To]);

  const onPressArrow = () => {
    setIsLoading(true);
    let tmp = From;
    setFrom(To);
    setTo(tmp);
    setTimeout(() => {
      SearchFromToFunction(To, From);
    }, 1000);
  };

  const SearchFromToFunction = (from: any, to: any) => {
    let newData: never[];
    if (from && to) {
      console.log('in if part........ ', from, ',', to, ',', isLoading);
      newData = customData?.filter(function (item: any) {
        let text = item.route.toString();
        const temparr = text.split(' ');
        let remark: string = item?.remarks?.toString();
        const temparr2 = remark?.split(' ');
        return (
          (temparr[0] == ResultFrom &&
            temparr[temparr.length - 1] == ResultTo) ||
          (temparr2?.includes(ResultFrom) && temparr2?.includes(ResultTo))
        );
      });
      setBusData(newData);
    } else if (from || to) {
      console.log('in else if part........ ', from, to, isLoading);
      newData = customData?.filter(function (item: any) {
        let text = item.route.toString();
        let remark: string = item?.remarks?.toString();
        const temparr = text.split(' ');
        const temparr2 = remark?.split(' ');
        return (
          temparr[0] == ResultFrom ||
          temparr[temparr.length - 1] == ResultTo ||
          temparr2?.includes(ResultFrom) ||
          temparr2?.includes(ResultTo)
        );
      });
      setBusData(newData);
    } else {
      console.log('in else part........ ', from, to, isLoading);
      setBusData(customData);
    }
    setIsLoading(false);
  };
  //console.log('isloading ', isLoading);
  return (
    <>
      <BusHeader />
      <SafeAreaView style={styles.maincontainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Translator
            from="en"
            to="gu"
            value={From}
            onTranslated={t => {
              setResultFrom(t);
            }}
          />
          <TextInput
            value={From}
            style={styles.textinput}
            placeholder="From"
            onChangeText={txt => {
              setIsLoading(true);
              setFrom(txt);
              SearchFromToFunction(txt, To);
              console.log('is loading', isLoading);
            }}
          />
          <Pressable
            style={{
              backgroundColor: '#dcdcdc',
              justifyContent: 'center',
              borderRadius: 25,
              height: 50,
              width: 50,
              margin: 5,
            }}
            onPress={() => onPressArrow()}>
            <Image
              style={{height: 30, width: 30, marginHorizontal: 10}}
              source={icons.twoarrow}
            />
          </Pressable>
          <Translator
            from="en"
            to="gu"
            value={To}
            onTranslated={t => {
              setResultTo(t);
            }}
          />
          <TextInput
            value={To}
            style={styles.textinput}
            placeholder="To"
            onChangeText={txt => {
              setIsLoading(true);
              setTo(txt);
              SearchFromToFunction(From, txt);
              console.log('is loading', isLoading);
              //setIsLoading(false);
            }}
          />
        </View>

        {isLoading ? (
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" animating={true} color="#00ff00" />
            <Text style={styles.redtext}>Please Wait data is loading...!</Text>
          </View>
        ) : !isLoading && BusData.length == 0 ? (
          <View style={{flex: 1}}>
            <Text style={styles.redtext}>No data found</Text>
          </View>
        ) : (
          <FlatList
            data={BusData}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}: any) => {
              return (
                <Pressable onPress={() => console.log('INDEX ', index)}>
                  <BusCard
                    endTime={item.endTime}
                    kilometers={item.kilometers}
                    remarks={item.remarks}
                    route={item.route}
                    scheduleNo={item.scheduleNo}
                    startTime={item.startTime}
                    type={item.type}
                  />
                </Pressable>
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default BusRoute;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  resultcard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    marginVertical: 5,
    paddingVertical: 20,
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
