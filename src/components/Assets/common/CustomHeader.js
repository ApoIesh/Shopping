import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../../../App';
import {L} from '../../../config';
import styles, {
  black_color,
  fontBold,
  fontmedum,
  fontRegular,
  gray_color,
  hp,
  white_color,
  wp,
} from '../style/startStyles';
import Icon from './Icon';
import {Main_Inout} from './Main_Inout';

const CustomHeader = ({
  value,
  onChangeText,

  width,
  height,
  left,
  right,
  screen_name,
  color,
  backgroundColor,
}) => {
  return (
    <View
      style={{
        // width: width ? width : wp(100),
        // height: height ? height : hp(7),
        marginVertical: hp(0.5),
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(1.5),
        backgroundColor: backgroundColor ? backgroundColor : colorSchemeView,
      }}
    >
      {left ? left : <View />}

      <Main_Inout
        value={value}
        onChangeText={onChangeText}
        backgroundColor={colorSchemeText}
        placeholder={L.search}
        borderRadius={wp(3)}
        height={hp(5)}
        placeholderTextColor={gray_color}
        color={colorSchemeView}
        left={
          <Icon
            type={'Feather'}
            name={'search'}
            size={wp(4)}
            color={colorSchemeView}
            style={{marginEnd: wp(1.5)}}
          />
        }
      />

      {right ? right : <View />}
    </View>
  );
};

export {CustomHeader};
