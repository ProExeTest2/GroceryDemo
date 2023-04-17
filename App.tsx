import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducer/index';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
