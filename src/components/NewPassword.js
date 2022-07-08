import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../App';
import {changeLng, L} from '../config';
import {navigate} from '../NavigationActions';
import {Main_Button, Main_Inout, Main_Picker} from './Assets/common';
import Icon from './Assets/common/Icon';
import Switchtoggle from './Assets/common/Switchtoggle';

import countries from './Assets/JSON/countries.json';
import ownApp from './Assets/style/ownApp';
import startStyles, {
  gray_color,
  hp,
  light_gray_color,
  white_color,
  wp,
} from './Assets/style/startStyles';

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOrEmail: null,
    };
  }

  render() {
    const {nameOrEmail} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: colorSchemeView}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={ownApp.welcomeView}>
            <Text
              style={[
                startStyles.introSmall,
                {color: colorSchemeText, marginVertical: hp(2)},
              ]}
            >
              {'Shopping App'}
            </Text>
          </View>
          <Text
            style={[
              startStyles.extraBold_18_gray,
              {
                color: colorSchemeText,
               margin:hp(2)
              },
            ]}
          >
            {L.forgetPassword}
          </Text>

          <View style={startStyles.view_92}>
            <Main_Inout
              placeholder={L.nameOrEmail}
              head_text={L.nameOrEmail}
              backgroundColor={colorSchemeView}
              color={colorSchemeText}
              headTextColor={gray_color}
              placeholderTextColor={colorSchemeText}
              borderWidth={wp(0.2)}
              borderColor={colorSchemeText}
              multiline={false}
              marginBottom={hp(2.5)}
              secureTextEntry={false}
              value={nameOrEmail}
              onChangeText={nameOrEmail => this.setState({nameOrEmail})}
            />
          </View>

          <Main_Button
            label={L.sendCode}
            marginTop={hp(5)}
            backgroundColor={colorSchemeText}
            TextColor={colorSchemeView}
            onPress={() => navigate('VarifyCode')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default NewPassword;
