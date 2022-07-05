import React from 'react';
import {Image, View} from 'react-native';

import {
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
import Category from './components/Category';
import CategoryItems from './components/CategoryItems';
import Intro from './components/Intro';

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
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: colorSchemeText,
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
        component={Category}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: colorSchemeText,
          headerStyle: {backgroundColor: colorSchemeView},
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
        name={L.Notifications}
        component={Notifications}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: colorSchemeText,
          headerStyle: {backgroundColor: colorSchemeView},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./components/Assets/image/icon_awesome_bell.png')}
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
      // initialRouteName={'TabComponent'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
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
          headerStyle: {
            backgroundColor: black_color,
            elevation: 0,
            borderBottomWidth: 0,
            height: hp(9),
          },
          headerTintColor: white_color,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View>
              <Icon
                size={wp(5)}
                name={L.goIcon}
                color={white_color}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          // headerRight: () => (
          //   <View style={{flexDirection: 'row'}}>
          //     <FontAwesome5
          //       size={wp(5.5)}
          //       name="shopping-bag"
          //       color={white_color}
          //       onPress={() => navigate(L('cart'))}
          //     />
          //     <View style={styles.notification_view}>
          //       <Text style={styles.Regular_10pt_white}>1</Text>
          //     </View>
          //   </View>
          // ),
        })}
      />

      <Stack.Screen name="TabComponent" component={TabComponent} />
    </Stack.Navigator>
  );
}
