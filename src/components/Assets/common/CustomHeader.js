import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles, {
  black_color,
  fontBold,
  fontmedum,
  fontRegular,
  hp,
  white_color,
  wp,
} from '../style/startStyles';

const CustomHeader = ({
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
        width: width ? width : wp(100),
        height: height ? height : hp(7),
        // marginVertical:hp(2),
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        position: 'relative',
        backgroundColor: backgroundColor ? backgroundColor : black_color,
      }}>
      {left ? left : <View />}

      {screen_name ? (
        <Text
          style={{
            fontSize: wp(5),
            fontFamily: fontmedum,
            color: color ? color : white_color,
          }}>
          {screen_name}
        </Text>
      ) : null}

      {right ? right : <View />}
    </View>
  );
};

export {CustomHeader};
