import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {
  button_color,
  fontBold,
  hp,
  white_color,
  wp,
} from '../style/startStyles';

const Main_Button = ({
  onPress,
  label,
  width,
  height,
  backgroundColor,
  borderRadius,
  right,
  left,
  elevation,
  borderWidth,
  TextColor,
  marginTop,
  marginBottom,
  activeOpacity,
  borderColor,
  image,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ? activeOpacity : 0.9}
      onPress={onPress}>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          width: width ? width : wp(80),
          height: height ? height : hp(6.5),
          backgroundColor: backgroundColor ? backgroundColor : button_color,
          borderRadius: borderRadius ? borderRadius : wp(10),
          elevation: elevation ? elevation : 0,
          borderWidth: borderWidth ? borderWidth : 0,
          marginTop: marginTop ? marginTop : 0,
          marginBottom: marginBottom ? marginBottom : 0,
          borderColor: borderColor ? borderColor : null,
        }}>
        {left && left}
        {image && image}
        <Text
          style={{
            color: TextColor ? TextColor : white_color,
            fontSize: fontSize ? fontSize : wp(4.6),
            fontFamily: fontBold,
            textTransform: 'capitalize',
            textAlign: 'center',
          }}>
          {label}
        </Text>
        {right && right}
      </View>
    </TouchableOpacity>
  );
};

export {Main_Button};
