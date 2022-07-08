import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  FlatList,
  ImageBackground,
} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../App';
import {L} from '../config';
import {navigate, reset} from '../NavigationActions';

import {Main_Button, Main_Inout, Main_Picker} from './Assets/common';
import Icon from './Assets/common/Icon';

import countries from './Assets/JSON/countries.json';
import ownApp from './Assets/style/ownApp';
import startStyles, {
  black_color,
  fontLight,
  fontRegular,
  gold_color,
  gray_color,
  Green_color,
  hp,
  light_gray_color,
  Primary_color,
  Secondary_color,
  white_color,
  wp,
  Yellow_color,
} from './Assets/style/startStyles';
import {Animated_Carousel} from './Assets/common/Animated_Carousel';
import Snap_Carousel from './Assets/common/Snap_Carousel';
import StarRating from 'react-native-star-rating';
import Flags from './Assets/JSON/Flags.json';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: colorSchemeView, flex: 1}}>
        <View style={startStyles.view_92}>
          <View style={ownApp.registerView}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={ownApp.buttonViewSignIn_1}>
                <View style={ownApp.buttonViewSignIn_2}>
                  <Image
                    source={require('./Assets/image/user.png')}
                    style={ownApp.imageViewSignIn}
                  />
                </View>
              </View>
              <Text
                style={[
                  startStyles.bold_12_white,
                  {color: colorSchemeText, marginVertical: wp(1)},
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={ownApp.buttonViewSignUp_1}>
                <View style={ownApp.buttonViewSignUp_2}>
                  <Image
                    source={require('./Assets/image/user.png')}
                    style={ownApp.imageViewSignUp}
                  />
                </View>
              </View>
              <Text
                style={[
                  startStyles.bold_12_white,
                  {color: colorSchemeText, marginVertical: wp(1)},
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={[
              startStyles.bold_16_gray,
              {
                color: colorSchemeText,
                paddingVertical: hp(1),
              },
            ]}
          >
            SETTING
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: hp(2),
              }}
            >
              <Image
                source={require('./Assets/image/globe.png')}
                style={{
                  width: wp(5),
                  height: wp(5),
                  marginEnd: wp(2),
                  tintColor: colorSchemeText,
                }}
              />
              <Text
                style={[startStyles.regular_16_gray, {color: colorSchemeText}]}
              >
                Country
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: hp(2),
              }}
            >
              <Main_Picker
                imagesData={true}
                props={Flags}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
