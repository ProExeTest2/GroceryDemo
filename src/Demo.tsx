import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ImageData} from './helper/Data/ImageData';
import {hp, wp} from './helper/responsive';
import MasonryList from 'react-native-masonry-list';
const Demo = () => {
  let num = 3;
  const arr_demo: any = [];

  // eslint-disable-next-line react/no-unstable-nested-components
  const ImageGrid = () => {
    const n = ImageData.length;
    for (let i = 0; i <= n; i++) {
      const rowindex = Math.floor(i / num);
      const isEven = rowindex % 2 === 0;
      const columnIndex = isEven ? i % num : num - 1 - (i % num);
      if (columnIndex === 0) {
        arr_demo.push(i);
      }
    }
  };

  function arraySplitting(array: any, size_of_chunk: any) {
    const arr = [];
    for (let i = 0; i < array.length; i += size_of_chunk) {
      const chunk = array.slice(i, i + size_of_chunk);
      arr.push(chunk);
    }
    return arr;
  }
  ImageGrid(); //arraySplitting(ImageData, 3);
  console.log(arr_demo);
  return (
    <SafeAreaView style={styles.maincontainer}>
      <MasonryList images={ImageData} />
      {/* <FlatList
        data={ImageData}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Image
              style={
                arr_demo.includes(index)
                  ? styles.gridbigitem
                  : styles.gridsmallitem
              }
              source={{uri: item.uri}}
            />
            // <View
            //   style={
            //     arr_demo.includes(index)
            //       ? styles.gridbigitem
            //       : styles.gridsmallitem
            //   }>
            //   {/* <Text>{index}</Text> */}
      {/* // </View> */}
      {/* );
        }}
      /> */}
    </SafeAreaView>
  );
};

export default Demo;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  gridmaincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gridbigitem: {
    // height: hp(20),
    // width: wp(20),
    height: hp(41.5),
    width: wp(40),
    backgroundColor: 'red',
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridsmallitem: {
    // height: hp(10),
    // width: wp(20),
    height: hp(20),
    width: wp(40),
    backgroundColor: 'yellow',
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

{
  /* <FlatList
      data={ImageData}
      numColumns={2}
      renderItem={({index, item}) => {
        return <ImageGrid index={index} uri={item.uri} />;
      }}
    /> */
}
/**const isBig = (rowindex + 2) % 3 === 0;
    // const columnIndex = isEven
    //   ? index % numColumns
    //   : numColumns - 1 - (index % numColumns);
    const item = isBig ? styles.gridbigitem : styles.gridsmallitem; */
/**<FlatList
        data={ImageData}
        numColumns={numColumns}
        renderItem={({item, index}) => {
          const rowindex = Math.floor(index / numColumns);
          const isEven = rowindex % 2 === 0;
          const columnIndex = isEven
            ? index % numColumns
            : numColumns - 1 - (index % numColumns);
          const itemstyle =
            columnIndex === 0 ? styles.gridbigitem : styles.gridsmallitem;

          return (
            <Pressable onPress={() => console.log(item.uri)}>
              <View style={itemstyle}>
                <Image source={{uri: item.uri}} />
              </View>
            </Pressable>
          );
        }}
      /> 
      
      
      <View style={itemstyle}>
              <Text>{index}</Text>
              {/* <Image style={itemstyle} source={{uri: item.uri}} /> 
            </View>
      */
/** <ScrollView>
        <FlatList
          data={tempArr}
          renderItem={({index, item}) => {
            return index % 2 == 0 ? (
              <View style={styles.gridmaincontainer}>
                <Pressable
                  style={styles.gridbigitem}
                  onPress={() => console.log('uri', item[0].uri)}>
                  <Image
                    style={styles.gridbigitem}
                    source={{
                      uri: item[0].uri,
                    }}
                  />
                </Pressable>
                <View>
                  <Image
                    style={styles.gridsmallitem}
                    source={{
                      uri: item[1].uri,
                    }}
                  />
                  <Image
                    style={styles.gridsmallitem}
                    source={{
                      uri: item[2].uri,
                    }}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.gridmaincontainer}>
                <View style={styles.gridmaincontainer}>
                  <View>
                    <Image
                      style={styles.gridsmallitem}
                      source={{
                        uri: item[0].uri,
                      }}
                    />
                    <Image
                      style={styles.gridsmallitem}
                      source={{
                        uri: item[1].uri,
                      }}
                    />
                  </View>
                  <Image
                    style={styles.gridbigitem}
                    source={{
                      uri: item[2].uri,
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </ScrollView> */
