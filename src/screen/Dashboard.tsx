import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ProductData} from '../helper/Data/ProductData';
import MenuCard from '../components/MenuCard';
import {hp, wp} from '../helper/responsive';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import {icons} from '../helper/iconsConstants';

const Dashboard = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Header
        title={'Grocery Demo'}
        isInititalScreen={true}
        OnPressRightIcon={() => navigation.navigate('Cart')}
      />
      <Image
        style={styles.banner}
        source={require('../../assets/banner.jpeg')}
      />
      <SearchBar />
      <FlatList
        style={{padding: 5}}
        data={ProductData}
        numColumns={2}
        renderItem={({item}) => (
          <MenuCard
            title={item.title}
            onPress={() => {
              navigation.navigate('Products', {itemTitle: item.title});
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    //paddingHorizontal:10
  },
  banner: {
    height: hp(20),
    width: wp(75),
    resizeMode: 'cover',
  },
});
