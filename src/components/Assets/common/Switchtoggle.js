import React, {useState} from 'react';
import {
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import {wp} from '../style/startStyles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Switchtoggle = ({
  openColorBG,
  closeColorBG,
  openColorIcon,
  colseColorIcon,
  shadowColor,
  value,
}) => {
  const [status, setStatus] = useState(false);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setStatus(value);
    setStatus(status === false ? true : false);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          height: wp(4.5),
          width: wp(13),
          borderRadius: wp(5),
          backgroundColor:
            status === false
              ? openColorBG
                ? openColorBG
                : '#000'
              : closeColorBG
              ? closeColorBG
              : '#fff',
          justifyContent: 'center',
          elevation: status === false ? wp(0) : wp(3),
          shadowColor: shadowColor ? shadowColor : '#454545',
        }}
      >
        <View
          style={[
            {
              height: status === false ? wp(3) : wp(6),
              width: status === false ? wp(3) : wp(6),
              borderRadius: status === false ? wp(3 / 2) : wp(6 / 2),
              marginStart: status === false ? wp(1) : null,

              backgroundColor:
                status === false
                  ? openColorIcon
                    ? openColorIcon
                    : '#fff'
                  : colseColorIcon
                  ? colseColorIcon
                  : '#000',
              alignSelf: status === false ? null : 'flex-end',
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Switchtoggle;
