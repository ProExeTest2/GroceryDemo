import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screen/Dashboard';
import Products from '../screen/Products';
import Cart from '../screen/Cart';
import BusRoute from '../screen/BusRoute';
import Demo from '../Demo';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitle: '',
        }}>
        <Stack.Screen
          name="BusRoute"
          component={BusRoute}
          //options={{headerShown: true}}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Demo" component={Demo} />

        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
