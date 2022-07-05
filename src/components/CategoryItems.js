import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  FlatList,
  ImageBackground,
} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../App';
import {L} from '../config';
import {navigate, reset} from '../NavigationActions';

import {Main_Button, Main_Inout, Main_Picker} from './Assets/common';
import Icon from './Assets/common/Icon';

import countries from './Assets/JSON/countries.json';
import ownApp from './Assets/style/ownApp';
import startStyles, {
  black_color,
  fontLight,
  fontRegular,
  gray_color,
  hp,
  light_gray_color,
  Primary_color,
  white_color,
  wp,
  Yellow_color,
} from './Assets/style/startStyles';
import {Animated_Carousel} from './Assets/common/Animated_Carousel';
import Snap_Carousel from './Assets/common/Snap_Carousel';
import StarRating from 'react-native-star-rating';

class CategoryItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      DATA: [
        {
          id: 1,
          name:
            'Maybelline Fit Me Matte Porelesadasd daasd asdasd asdasfd asdfasdf ss -115 Ivory',
          image:
            'https://m.media-amazon.com/images/I/51CaGImXs7L._AC_UL320_.jpg',
          rating: 4.5,
          pound: '280',
          piastre: '55',
          reviews: '17',
          dateArrives: 'Tomorrow,Jul 3',
          discount: true,
          priceAfterDiscount: '350.55',
        },
        {
          id: 2,
          name:
            'تلفزيون LED ذكي بدقة فائقة الوضوح مقاس 40 بوصة مع مستقبل مدمج UA40T5300 أسود',
          image:
            'https://z.nooncdn.com/products/tr:n-t_80/v1655124028/N38098275A_1.jpg',
          rating: 4.5,
          pound: '280',
          piastre: '55',
          reviews: '17',
          dateArrives: 'Mon Jul 4',
        },
        {
          id: 3,
          name:
            'تلفزيون LED ذكي بدقة فائقة الوضوح مقاس 40 بوصة مع مستقبل مدمج UA40T5300 أسود',
          image:
            'https://z.nooncdn.com/products/tr:n-t_80/v1655124028/N38098275A_1.jpg',
          rating: 4.5,
          pound: '280',
          piastre: '55',
          reviews: '17',
          dateArrives: 'Mon Jul 4',
        },
        {
          id: 4,
          name:
            'تلفزيون LED ذكي بدقة فائقة الوضوح مقاس 40 بوصة مع مستقبل مدمج UA40T5300 أسود',
          image:
            'https://z.nooncdn.com/products/tr:n-t_80/v1655124028/N38098275A_1.jpg',
          rating: 4.5,
          pound: '280',
          piastre: '55',
          reviews: '17',
          dateArrives: 'Mon Jul 4',
        },
        {
          id: 5,
          name:
            'تلفزيون LED ذكي بدقة فائقة الوضوح مقاس 40 بوصة مع مستقبل مدمج UA40T5300 أسود',
          image:
            'https://z.nooncdn.com/products/tr:n-t_80/v1655124028/N38098275A_1.jpg',
          rating: 4.5,
          pound: '280',
          piastre: '55',
          reviews: '17',
          dateArrives: 'Mon Jul 4',
        },
        {
          id: 6,
          name:
            'تلفزيون LED ذكي بدقة فائقة الوضوح مقاس 40 بوصة مع مستقبل مدمج UA40T5300 أسود',
          image:
            'https://z.nooncdn.com/products/tr:n-t_80/v1655124028/N38098275A_1.jpg',
          rating: 4.5,
          pound: '280',
          piastre: '55',
          reviews: '17',
          dateArrives: 'Mon Jul 4',
        },
      ],
    };
  }
  renderItems = ({item, index}) => {
    const {DATA_IMAGES} = this.state;
    const itemName =
      item?.name?.length >= 45 ? item?.name?.slice('', 45) + '...' : item?.name;

    return (
      <View style={ownApp.viewItem}>
        <TouchableOpacity>
          <View style={[ownApp.viewItems, {backgroundColor: colorSchemeView}]}>
            <ImageBackground
              borderRadius={wp(2)}
              source={{uri: item.image}}
              resizeMode={'contain'}
              style={ownApp.imageItems}
            />
            <View style={{paddingHorizontal: wp(2)}}>
              <Text
                style={[
                  startStyles.regular_12_white,
                  ownApp.nameItems,
                  {color: colorSchemeText},
                ]}
              >
                {itemName}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <View style={ownApp.starsView}>
                    <StarRating
                      starStyle={{color: colorSchemeText}}
                      starSize={wp(3.5)}
                      containerStyle={{width: wp(22)}}
                      disabled={true}
                      maxStars={5}
                      rating={item.rating}
                    />
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText, marginStart: wp(2)},
                      ]}
                    >
                      {item.reviews}
                    </Text>
                    <Icon
                      name={L.backIcon}
                      color={colorSchemeText}
                      size={wp(3.5)}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={ownApp.price_sec}>
                <Text
                  style={[
                    startStyles.regular_14_white,
                    {
                      color: colorSchemeText,
                      marginEnd: wp(1),
                    },
                  ]}
                >
                  {L.currency}
                </Text>
                <Text
                  style={{
                    ...startStyles.extraBold_14_white,
                    color: colorSchemeText,
                  }}
                >
                  {item.pound + '.' + item.piastre}
                </Text>
                {item.discount === true ? (
                  <Text
                    style={[
                      startStyles.light_9_black,
                      ownApp.styleDiscount,
                      {
                        color: colorSchemeText,
                      },
                    ]}
                  >
                    {item.priceAfterDiscount}
                  </Text>
                ) : null}
              </View>

              <View style={ownApp.arrives_sec}>
                <Text
                  style={[
                    startStyles.light_9_gray,
                    {color: colorSchemeText, marginEnd: wp(1.5)},
                  ]}
                >
                  {L.arrives}
                </Text>
                <Text
                  style={[
                    startStyles.bold_9_gray,
                    {
                      color: colorSchemeText,
                    },
                  ]}
                >
                  {item.dateArrives}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {search, DATA} = this.state;
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

        <FlatList
          data={DATA}
          // style={{paddingStart: wp(2)}}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

export default CategoryItems;
