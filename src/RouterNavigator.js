import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import startStyles, {
  black_color,
  gray_color,
  hp,
  white_color,
  wp,
} from './components/Assets/style/startStyles';
import Icon from './components/Assets/common/Icon';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated_Carousel} from './components/Assets/common/Animated_Carousel';
import {L} from './config';
import {colorSchemeText, colorSchemeView} from './App';
import ownApp from './components/Assets/style/ownApp';
import Snap_Carousel from './components/Assets/common/Snap_Carousel';

import SignIn from './components/SignIn';
import NewPassword from './components/NewPassword';
import SignUp from './components/SignUp';
import Home from './components/Home';
import VarifyCode from './components/VarifyCode';
import Notifications from './components/Notifications';
import Categories from './components/Categories';
import CategoryItems from './components/CategoryItems';
import Intro from './components/Intro';
import {CustomHeader, Main_Inout} from './components/Assets/common';
import Item from './components/Item';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: white_color,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {...ownApp.tabBarStyle, backgroundColor: colorSchemeView},
      })}
    >
      <Tab.Screen
        name={L.Home}
        component={Home}
        options={{
          headerShown: true,
          header: () => (
            <View style={{backgroundColor: colorSchemeView}}>
              <CustomHeader
                left={
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                      type={'AntDesign'}
                      name={'shoppingcart'}
                      size={wp(6.5)}
                      color={colorSchemeText}
                      style={{margin: wp(1)}}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          ),
          headerStyle: {backgroundColor: colorSchemeView},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/home.png')}
              style={{
                ...ownApp.tabBarImage,
                tintColor: focused ? colorSchemeText : gray_color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={L.category}
        component={Categories}
        options={{
          headerShown: true,
          header: () => (
            <View style={{backgroundColor: colorSchemeView}}>
              <CustomHeader
                left={
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                      type={'AntDesign'}
                      name={'shoppingcart'}
                      size={wp(6.5)}
                      color={colorSchemeText}
                      style={{margin: wp(1)}}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              type={'Feather'}
              name={'list'}
              size={wp(5)}
              color={focused ? colorSchemeText : gray_color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/user.png')}
              style={{
                ...ownApp.tabBarImage,
                tintColor: focused ? colorSchemeText : gray_color,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={L.Notifications}
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/notification.png')}
              style={{
                ...ownApp.tabBarImage,
                tintColor: focused ? colorSchemeText : gray_color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RouterNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName={'Item'}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colorSchemeView,
          elevation: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />

      <Stack.Screen name="TabComponent" component={TabComponent} />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VarifyCode"
        component={VarifyCode}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CategoryItems"
        component={CategoryItems}
        options={({navigation, route}) => ({
          headerShown: true,
          headerShadowVisible: false,
          header: () => (
            <View style={{backgroundColor: colorSchemeView}}>
              <CustomHeader
                left={
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                      // type={'AntDesign'}
                      name={L.goIcon}
                      size={wp(6.5)}
                      color={colorSchemeText}
                      style={{margin: wp(1)}}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          ),
        })}
      />

      <Stack.Screen
        name="Item"
        component={Item}
        options={({navigation, route}) => ({
          headerShown: false,
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}
