import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {colorSchemeText, colorSchemeView} from '../App';
import {changeLng, L} from '../config';
import {navigate} from '../NavigationActions';
import ar from '../translations/ar';
import en from '../translations/en';
import {Main_Button, Main_Inout, Main_Picker} from './Assets/common';
import Icon from './Assets/common/Icon';
import Switchtoggle from './Assets/common/Switchtoggle';

import countries from './Assets/JSON/countries.json';
import ownApp from './Assets/style/ownApp';
import startStyles, {
  fontBold,
  fontExtrabold,
  gray_color,
  hp,
  light_gray_color,
  white_color,
  wp,
} from './Assets/style/startStyles';

class VarifyCode extends Component {
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
                margin: hp(2),
              },
            ]}
          >
            {L.confirm_code}
          </Text>

          <View style={startStyles.view_92}>
            <CodeInput
              keyboardType="phone-pad"
              ref="refName"
              secureTextEntry={false}
              // compareWithCode="AsDW2"
              activeColor={colorSchemeText}
              inactiveColor={gray_color}
              codeLength={4}
              autoFocus={false}
              ignoreCase={true}
              inputPosition="center"
              size={wp(10)}
              space={wp(4)}
              className={'border-b'}
              selectionColor="#161616"
              onFulfill={() => navigate('SignIn')}
              containerStyle={{flexDirection: 'row'}}
              codeInputStyle={{
                fontSize: wp(4.5),
                fontFamily: fontExtrabold,
              }}
            />

            <Main_Button
              label={L.confirm}
              marginTop={hp(5)}
              backgroundColor={colorSchemeText}
              TextColor={colorSchemeView}
              onPress={() => navigate('TabComponent')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default VarifyCode;
