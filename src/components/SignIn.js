import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../App';
import {L} from '../config';
import {navigate} from '../NavigationActions';
import {Main_Button, Main_Inout} from './Assets/common';
import Icon from './Assets/common/Icon';
import ownApp from './Assets/style/ownApp';
import startStyles, {gray_color, hp, wp} from './Assets/style/startStyles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
      password: null,
      securePass: true,
      remember: false,
    };
  }

  render() {
    const {password, user_name, securePass, remember} = this.state;
    const secureIcon = securePass == true ? 'eye-with-line' : 'eye';

    return (
      <View style={{flex: 1, backgroundColor: colorSchemeView}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={ownApp.welcomeView}>
            <Text style={[startStyles.introBig, {color: colorSchemeText}]}>
              {L.welcome}
            </Text>
            <Text
              style={[
                startStyles.introSmall,
                {color: colorSchemeText, margin:hp(2)},
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
                marginStart: wp(4),
                marginBottom: hp(3),
              },
            ]}
          >
            {L.sign_in}
          </Text>

          <View style={startStyles.view_90}>
            <Main_Inout
              value={user_name}
              onChangeText={user_name => this.setState({user_name})}
              placeholder={L.user_name}
              head_text={L.user_name}
              backgroundColor={colorSchemeView}
              color={colorSchemeText}
              headTextColor={gray_color}
              placeholderTextColor={colorSchemeText}
              borderWidth={wp(0.2)}
              borderColor={colorSchemeText}
              multiline={false}
              marginBottom={hp(2.5)}
              secureTextEntry={false}
            />

            <Main_Inout
              value={password}
              onChangeText={password => this.setState({password})}
              placeholder={L.password}
              head_text={L.password}
              backgroundColor={colorSchemeView}
              color={colorSchemeText}
              headTextColor={gray_color}
              placeholderTextColor={colorSchemeText}
              borderWidth={wp(0.2)}
              borderColor={colorSchemeText}
              multiline={false}
              secureTextEntry={securePass}
              right={
                <View style={ownApp.rightPass}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{marginEnd: wp(3)}}
                    onPress={() => navigate('NewPassword')}
                  >
                    <Text style={[startStyles.bold_12_gray]}>{L.forget}</Text>
                  </TouchableOpacity>
                  <Icon
                    type={'Entypo'}
                    name={secureIcon}
                    size={wp(3.8)}
                    onPress={() => this.setState({securePass: !securePass})}
                    color={colorSchemeText}
                  />
                </View>
              }
            />

            <TouchableOpacity
              style={ownApp.rememberIconView}
              activeOpacity={0.8}
              onPress={() => this.setState({remember: !remember})}
            >
              <View style={ownApp.rememberIconView_1}>
                {remember == true ? (
                  <Icon
                    type={'AntDesign'}
                    name={'check'}
                    color={colorSchemeText}
                    size={wp(4)}
                  />
                ) : null}
              </View>

              <Text
                style={{
                  ...startStyles.bold_12_gray,
                  color: colorSchemeText,
                }}
              >
                {L.remember}
              </Text>
            </TouchableOpacity>
          </View>

          <Main_Button
            label={L.sign_in}
            marginBottom={hp(10)}
            backgroundColor={colorSchemeText}
            TextColor={colorSchemeView}
            onPress={() => navigate('TabComponent')}
          />

          <View style={ownApp.if_you_have}>
            <Text style={[startStyles.light_12_gray, {color: colorSchemeText}]}>
              {L.dont_have_account}
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigate('SignUp')}
            >
              <Text
                style={[
                  startStyles.bold_12_black,
                  {color: colorSchemeText, marginStart: wp(1)},
                ]}
              >
                {L.sign_up}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignIn;
