import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {L} from '../../../config';
import {
  border_Color,
  wp,
  placeholder_color,
  hp,
  fontLight,
  black_color,
  fontRegular,
  gray_color,
  white_color,
} from '../style/startStyles';

const Main_Inout = ({
  marginTop,
  placeholder,
  value,
  onChangeText,
  returnKeyType,
  secureTextEntry,
  keyboardType,
  maxLength,
  editable,
  right,
  left,
  placeholderTextColor,
  multiline,
  numberOfLines,
  width,
  marginBottom,
  height,
  borderRadius,
  head_text,
  backgroundColor,
  borderWidth,
  color,
  borderColor,
  paddingHorizontal,
  paddingVertical,
  flexDirection,
  alignSelf,
  alignItems,
  justifyContent,
  headTextColor,
  defaultValue,
  textAlign,
}) => {
  const [isFocused, setFocused] = React.useState(false);
  return (
    <View style={{marginTop: marginTop ? marginTop : 0}}>
      <View
        style={{
          flexDirection: flexDirection ? flexDirection : 'row',
          alignSelf: alignSelf ? alignSelf : 'flex-start',
          alignItems: alignItems ? alignItems : 'center',
          justifyContent: justifyContent ? justifyContent : 'center',

          borderColor: borderColor ? borderColor : border_Color,
          borderWidth: borderWidth ? borderWidth : 0.2,
          // borderBottomWidth: borderBottomWidth ? borderBottomWidth : .2,
          borderRadius: borderRadius ? borderRadius : hp(10),

          backgroundColor: backgroundColor ? backgroundColor : white_color,
          marginBottom: marginBottom ? marginBottom : 0,

          paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(5),
          paddingVertical: paddingVertical ? paddingVertical : 0,

          height: height ? height : hp(6.5),
        }}
      >
        {left ? left : <View />}

        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          textAlign={L.getLanguage().toString() === 'ar' ? 'right' : 'left'}
          placeholder={isFocused == false ? placeholder : null}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            alignSelf: 'flex-start',
            color: color ? color : '#fff',
            fontFamily: fontRegular,
            fontSize: wp(3.5),
            // borderBottomWidth: borderBottomWidth ? borderBottomWidth : 0.2,
            // borderColor: borderColor ? borderColor : border_Color,
            // width: width ? width : wp(70),
            // borderWidth: 1,
          }}
          onChangeText={onChangeText}
          value={value}
          defaultValue={defaultValue}
          selectionColor={black_color}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : placeholder_color
          }
        />

        {right ? right : <View />}
      </View>
      <View
        style={{
          position: 'absolute',
          marginStart: wp(5),
          marginTop: hp(0.2),
        }}
      >
        {head_text ? (
          isFocused == true || value ? (
            <Text
              style={{
                fontFamily: fontLight,
                color: headTextColor ? headTextColor : null,
                fontSize: wp(2.2),
              }}
            >
              {head_text}
            </Text>
          ) : null
        ) : null}
      </View>
    </View>
  );
};

export {Main_Inout};
