import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Translator, {useTranslator} from 'react-native-translator';
const Demo = () => {
  const {translate} = useTranslator();
  const [value, setValue] = useState('');
  const [Result, setResult] = useState('');
  useEffect(() => {
    //onTranslate();
  }, [value]);

  //   const onTranslate = async () => {
  //     const _result: any = await translate('en', 'fr', value);
  //     console.log('RESULT ', _result);

  //     setResult(_result);
  //   };
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <Translator
        from="en"
        to="gu"
        value={value}
        onTranslated={t => setResult(t)}
      />
      {/* <TextInput value={value} onChangeText={t => setValue(t)} /> */}
      {/* <Text>{result}</Text> */}
      <TextInput
        style={{backgroundColor: 'lightpink'}}
        value={value}
        placeholder="Type Here....."
        onChangeText={(txt: any) => {
          setValue(txt);
        }}
      />
      <ActivityIndicator
        //animating={isLoading}
        size="large"
        animating={true}
        color="#00ff00"
      />
      <Text style={{backgroundColor: 'pink', marginVertical: 10, fontSize: 20}}>
        this is the result= {Result}
      </Text>
      {/* <Button title="Translate" onPress={() => onTranslate()} /> */}
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
