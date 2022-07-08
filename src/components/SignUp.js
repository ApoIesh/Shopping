import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../App';
import {L} from '../config';
import {navigate, reset} from '../NavigationActions';
import {Main_Button, Main_Inout, Main_Picker} from './Assets/common';
import Icon from './Assets/common/Icon';

import countries from './Assets/JSON/countries.json';
import ownApp from './Assets/style/ownApp';
import startStyles, {
  gray_color,
  hp,
  white_color,
  wp,
} from './Assets/style/startStyles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: null,
      email: null,
      phone: null,
      sity: null,
      password: null,
      confirmPassword: null,
      securePass: true,
      secureConfirmPass: true,
      terms: false,
    };
  }

  render() {
    const {
      user_name,
      email,
      phone,
      sity,
      password,
      confirmPassword,
      securePass,
      secureConfirmPass,
      terms,
    } = this.state;
    const secureIcon = securePass == true ? 'eye-with-line' : 'eye';
    const secureConfirmIcon =
      secureConfirmPass == true ? 'eye-with-line' : 'eye';

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
            {L.sign_up}
          </Text>

          <View style={startStyles.view_92}>
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
              value={email}
              onChangeText={email => this.setState({email})}
              placeholder={L.email}
              head_text={L.email}
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
              value={phone}
              onChangeText={phone => this.setState({phone})}
              placeholder={L.phone}
              head_text={L.phone}
              backgroundColor={colorSchemeView}
              color={colorSchemeText}
              headTextColor={gray_color}
              placeholderTextColor={colorSchemeText}
              borderWidth={wp(0.2)}
              borderColor={colorSchemeText}
              multiline={false}
              marginBottom={hp(2.5)}
              secureTextEntry={false}
              keyboardType={'number-pad'}
              right={
                <View style={{width: wp(15)}}>
                  <Main_Picker props={countries} placeholder={L.select} />
                </View>
              }
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
              marginBottom={hp(2.5)}
              secureTextEntry={securePass}
              right={
                <Icon
                  type={'Entypo'}
                  name={secureIcon}
                  size={wp(3.8)}
                  onPress={() => this.setState({securePass: !securePass})}
                  color={colorSchemeText}
                />
              }
            />
            <Main_Inout
              placeholder={L.confirmPassword}
              head_text={L.confirmPassword}
              backgroundColor={colorSchemeView}
              color={colorSchemeText}
              headTextColor={gray_color}
              placeholderTextColor={colorSchemeText}
              borderWidth={wp(0.2)}
              borderColor={colorSchemeText}
              multiline={false}
              // marginBottom={hp(5)}
              secureTextEntry={secureConfirmPass}
              value={confirmPassword}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
              right={
                <Icon
                  type={'Entypo'}
                  name={secureConfirmIcon}
                  size={wp(3.8)}
                  onPress={() =>
                    this.setState({secureConfirmPass: !secureConfirmPass})
                  }
                  color={colorSchemeText}
                />
              }
            />
            <View style={ownApp.termsIconView}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.setState({terms: !terms})}
              >
                <View style={ownApp.termsIconView_1}>
                  {terms == true ? (
                    <Icon
                      type={'AntDesign'}
                      name={'check'}
                      color={colorSchemeText}
                      size={wp(4)}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    ...startStyles.bold_12_gray,
                    color: colorSchemeText,
                  }}
                >
                  {L.termsConditions}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Main_Button
            label={L.sign_up}
            marginBottom={hp(10)}
            backgroundColor={colorSchemeText}
            TextColor={colorSchemeView}
            onPress={() => navigate('TabComponent')}
          />

          <View style={ownApp.if_you_have}>
            <Text style={[startStyles.light_12_gray, {color: colorSchemeText}]}>
              {L.already_have_account}
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => reset('SignIn')}
            >
              <Text
                style={[
                  startStyles.bold_12_black,
                  {color: colorSchemeText, marginStart: wp(1)},
                ]}
              >
                {L.sign_in}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
