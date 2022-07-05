import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {L} from '../config';
import startStyles, {
  black_color,
  gray_color,
  hp,
  light_gray_color,
  Primary_color,
  Secondary_color,
  white_color,
  wp,
  fontLight,
  fontRegular,
  Yellow_color,
  Blue_color,
} from './Assets/style/startStyles';

import {colorSchemeText, colorSchemeView} from '../App';
import {navigate, reset} from '../NavigationActions';

import {Main_Button, Main_Inout, Main_Picker} from './Assets/common';
import Icon from './Assets/common/Icon';

import ownApp from './Assets/style/ownApp';

import {Animated_Carousel} from './Assets/common/Animated_Carousel';
import Snap_Carousel from './Assets/common/Snap_Carousel';
import StarRating from 'react-native-star-rating';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      for_himAnimation: new Animated.Value(wp(0)),
      footwearAnimated: new Animated.Value(wp(0)),
      brandesAnimated: new Animated.Value(wp(0)),
      splashImage:
        'https://k.nooncdn.com/cms/pages/20220601/1dd81d8cd84d262234e1fd8a3799bf0a/ar_web-brands.gif',
      sec_category: 0,
      for_him: false,
      footwear: false,
      brandes: false,
      DATA_CategoeyNames: [
        {name: L.for_you},
        {name: L.menFashion},
        {name: L.womenFashion},
        {name: L.kitchen},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: L.for_you},
        {name: L.menFashion},
        {name: L.womenFashion},
        {name: L.kitchen},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: L.for_you},
        {name: L.menFashion},
        {name: L.womenFashion},
        {name: L.kitchen},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fashion"},
        {name: "Women's Fas   hion"},
      ],
      DATA: [
        {
          name: 'Shirts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1635679489/N47843270V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
        {
          name: 'Shirts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1635679489/N47843270V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
        {
          name: 'Shorts',
          image:
            'https://z.nooncdn.com/products/tr:n-t_240/v1622472199/N43761256V_1.jpg',
        },
      ],
    };
  }

  renderCategoeyNames = ({item, index}) => {
    const {sec_category} = this.state;
    return (
      <View>
        {index === 0 ? (
          <TouchableWithoutFeedback
            onPress={() => this.setState({sec_category: index})}
          >
            <View
              style={{
                ...ownApp.categorySelect,
                backgroundColor:
                  sec_category === index ? colorSchemeView : colorSchemeView,
                borderStartWidth: sec_category === index ? wp(1) : 0,
                borderTopWidth: sec_category === index ? 0.2 : 0,
                borderBottomWidth: sec_category === index ? 0.2 : 0,
                borderColor: colorSchemeText,
              }}
            >
              <Text
                style={[
                  sec_category == index
                    ? startStyles.extraBold_12_gray
                    : startStyles.light_12_gray,
                  ownApp.forYouText,
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            activeOpacity={0.8}
            onPress={() => this.setState({sec_category: index})}
          >
            <View
              style={{
                ...ownApp.categorySelect,
                backgroundColor:
                  sec_category === index ? colorSchemeView : colorSchemeView,
                borderStartWidth: sec_category === index ? wp(1) : 0,
                borderTopWidth: sec_category === index ? 0.2 : 0,
                borderBottomWidth: sec_category === index ? 0.2 : 0,
                borderColor: colorSchemeText,
              }}
            >
              <Text
                style={[
                  ownApp.categoryText,
                  sec_category == index
                    ? startStyles.extraBold_12_gray
                    : startStyles.light_12_gray,
                  {color: colorSchemeText},
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  };

  itemsInCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: wp(17),
          marginHorizontal: wp(3),
          alignItems: 'center',
          marginVertical: wp(3),
        }}
      >
        <Image
          source={{uri: item.image}}
          style={{
            width: wp(17),
            height: wp(17),
            resizeMode: 'cover',
            borderRadius: wp(3),
          }}
        />
        <Text
          style={[
            startStyles.regular_12_gray,
            {color: colorSchemeText, lineHeight: wp(5.5)},
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  for_himPress = () => {
    const {for_himAnimation, for_him} = this.state;
    if (for_him === false) {
      this.setState({for_him: !for_him}),
        Animated.timing(for_himAnimation, {
          toValue: wp(60),
          duration: 700,
          useNativeDriver: false,
        }).start();
    } else {
      this.setState({for_him: !for_him}),
        Animated.timing(for_himAnimation, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
    }
  };

  footwearPress = () => {
    const {footwearAnimated, footwear} = this.state;
    if (footwear === false) {
      this.setState({footwear: !footwear}),
        Animated.timing(footwearAnimated, {
          toValue: wp(60),
          duration: 700,
          useNativeDriver: false,
        }).start();
    } else {
      this.setState({footwear: !footwear}),
        Animated.timing(footwearAnimated, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
    }
  };
  brandesPress = () => {
    const {brandes, brandesAnimated} = this.state;
    if (brandes === false) {
      this.setState({brandes: !brandes}),
        Animated.timing(brandesAnimated, {
          toValue: wp(60),
          duration: 700,
          useNativeDriver: false,
        }).start();
    } else {
      this.setState({brandes: !brandes}),
        Animated.timing(brandesAnimated, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
    }
  };

  render() {
    const {
      search,
      sec_category,
      splashImage,
      DATA_CategoeyNames,
      DATA,

      for_him,
      for_himAnimation,
      footwear,
      footwearAnimated,
      brandes,
      brandesAnimated,
    } = this.state;

    //Animated

    return (
      <View style={{backgroundColor: colorSchemeView, flex: 1}}>
        <View style={startStyles.view_96}>
          <View style={ownApp.search_sec}>
            <TouchableOpacity>
              <Icon
                type={'AntDesign'}
                name={'shoppingcart'}
                size={wp(6.5)}
                color={colorSchemeText}
                style={{margin: wp(1)}}
              />
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <Main_Inout
                value={search}
                onChangeText={search => this.setState({search})}
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
                    size={wp(3.5)}
                    color={colorSchemeView}
                    style={{marginEnd: wp(1)}}
                  />
                }
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={[ownApp.title_sec, {backgroundColor: colorSchemeView}]}>
            <FlatList
              data={DATA_CategoeyNames}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderCategoeyNames}
            />
          </View>

          <View
            style={[ownApp.details_sec, {backgroundColor: colorSchemeView}]}
          >
            <ScrollView
              style={{marginBottom: hp(5)}}
              showsVerticalScrollIndicator={false}
            >
              <Text
                style={[
                  startStyles.bold_12_gray,
                  ownApp.title_sec_name,
                  {
                    color: colorSchemeText,
                  },
                ]}
              >
                {L.menFashion}
              </Text>

              <Image source={{uri: splashImage}} style={ownApp.splashImage} />

              <View style={[ownApp.itemsMenu, {borderColor: colorSchemeText}]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.for_himPress}
                >
                  <View style={ownApp.itemMenu}>
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {L.for_him}
                    </Text>
                    {for_him === false ? (
                      <Icon name={'chevron-down-sharp'} size={wp(4)} />
                    ) : (
                      <Icon name={'chevron-up-sharp'} size={wp(4)} />
                    )}
                  </View>
                </TouchableOpacity>

                <Animated.FlatList
                  data={DATA}
                  style={{height: for_himAnimation}}
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={this.itemsInCategory}
                />
              </View>

              <View style={[ownApp.itemsMenu, {borderColor: colorSchemeText}]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.footwearPress}
                >
                  <View style={ownApp.itemMenu}>
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {'Footwear'}
                    </Text>
                    {footwear === false ? (
                      <Icon name={'chevron-down-sharp'} size={wp(4)} />
                    ) : (
                      <Icon name={'chevron-up-sharp'} size={wp(4)} />
                    )}
                  </View>
                </TouchableOpacity>

                <Animated.FlatList
                  data={DATA}
                  style={{height: footwearAnimated}}
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={this.itemsInCategory}
                />
              </View>

              <View style={[ownApp.itemsMenu, {borderColor: colorSchemeText}]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.brandesPress}
                >
                  <View style={ownApp.itemMenu}>
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {'Top Brandes'}
                    </Text>
                    {brandes === false ? (
                      <Icon name={'chevron-down-sharp'} size={wp(4)} />
                    ) : (
                      <Icon name={'chevron-up-sharp'} size={wp(4)} />
                    )}
                  </View>
                </TouchableOpacity>

                <Animated.FlatList
                  data={DATA}
                  style={{height: brandesAnimated}}
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={this.itemsInCategory}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Category;
