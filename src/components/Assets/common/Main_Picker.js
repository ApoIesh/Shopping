import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../../../App';
import {L} from '../../../config';
import textsStyles, {
  black_color,
  border_Color,
  hp,
  wp,
} from '../style/startStyles';
import Icon from './Icon';

const Main_Picker = ({
  props,
  onPress,
  placeholder,
  borderBottomWidth,
  borderColor,
  imagesData,
}) => {
  console.log(props);
  const [data, setData] = useState(`${placeholder}`);
  const [image, setImage] = useState(
    '//upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',
  );
  const [isModalVisible, setisModalVisible] = useState(false);

  const selectData =
    imagesData === true
      ? data
      : imagesData === false
      ? data.length >= 10
        ? data?.slice('', 10) + '...'
        : data
      : placeholder;

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };

  const onPressItem = res => {
    setisModalVisible(false);
    setData(res);
    setImage(res);
  };

  const sorted = props.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const option = sorted?.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          onPressItem(imagesData === true ? item.file_url : item.alpha3)
        }
        style={{height: wp(10), width: wp(100)}}
      >
        <Text
          style={{
            fontSize: wp(4.1),
            color: colorSchemeView,
            textAlign: 'center',
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={{marginHorizontal: wp(2)}}>
      <TouchableOpacity onPress={() => changeModalVisible(onPress)}>
        <View
          style={{
            borderBottomWidth: borderBottomWidth ? borderBottomWidth : 0,
            borderColor: borderColor ? borderColor : border_Color,
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ImageBackground
            source={{
              uri:
                '//upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',
            }}
            style={{
              width: wp(8),
              height: wp(8),
              borderWidth: 1,
            }}
          />
          {imagesData === true ? (
            <ImageBackground
              source={{uri: selectData}}
              style={{
                width: wp(8),
                height: wp(8),
                borderWidth: 0.2,
              }}
            />
          ) : (
            <Text style={textsStyles.bold_12_gray}>{selectData}</Text>
          )}
          <Icon
            type={'AntDesign'}
            name={isModalVisible == false ? 'caretup' : 'caretdown'}
            color={colorSchemeText}
            style={{marginStart: wp(3)}}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          changeModalVisible(false);
        }}
      >
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <View
            style={{
              position: 'absolute',
              width: wp(100),
              height: hp(20),
              alignSelf: 'center',
              backgroundColor: colorSchemeText,
              borderTopStartRadius: hp(2.5),
              borderTopEndRadius: hp(2.5),
            }}
          >
            <TouchableOpacity
              onPress={() => changeModalVisible(false)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(5),
                marginTop: wp(2.5),
              }}
            >
              <View />
              <Text style={{color: colorSchemeView, alignSelf: 'flex-end'}}>
                {L.close}
              </Text>
            </TouchableOpacity>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{alignSelf: 'center'}}
            >
              {props ? (
                option
              ) : (
                <Text style={{color: colorSchemeView, alignSelf: 'center'}}>
                  check connection
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export {Main_Picker};
