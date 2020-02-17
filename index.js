/**
 * @format
 */

import 'react-native-gesture-handler'; // TODO: production에서 에러 날 가능성이 있음

import App from './App';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Notice from './src/components/Notice';
import React from 'react';
import Setting from './src/components/Setting';
import Sub from './src/components/Sub';
import {name as appName} from './app.json';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={App} />
    <Stack.Screen name="Sub" component={Sub} />
  </Stack.Navigator>
);

const Side = () => (
  <Stack.Navigator initialRouteName="Notice">
    <Stack.Screen name="Notice" component={Notice} />
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>
);

const Container = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Root">
      <Drawer.Screen name="Root" component={Root} />
      <Drawer.Screen name="Side" component={Side} />
    </Drawer.Navigator>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Container);
