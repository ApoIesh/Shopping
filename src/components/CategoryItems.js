import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {colorSchemeText, colorSchemeView} from '../App';
import {L} from '../config';
import {navigate} from '../NavigationActions';
import Icon from './Assets/common/Icon';
import ownApp from './Assets/style/ownApp';
import startStyles, {
  gold_color,
  gray_color,
  hp,
  light_gray_color,
  wp,
} from './Assets/style/startStyles';
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
    const itemName =
      item?.name?.length >= 45 ? item?.name?.slice('', 45) + '...' : item?.name;

    return (
      <View style={{alignItems: 'center', marginEnd: wp(2.5)}}>
        <TouchableWithoutFeedback onPress={() => navigate('Item')}>
          <View
            style={[
              {
                flexDirection: 'column',

                borderWidth: wp(0.2),
                borderRadius: wp(2),
                borderColor: light_gray_color,
              },
              {backgroundColor: colorSchemeView},
            ]}
          >
            <ImageBackground
              borderTopLeftRadius={wp(2)}
              borderTopRightRadius={wp(2)}
              source={{uri: item.image}}
              resizeMode={'contain'}
              style={{height: hp(20)}}
            />
            <View style={{paddingHorizontal: wp(2)}}>
              <Text
                style={[
                  startStyles.regular_12_white,
                  {marginVertical: wp(1), textAlign: 'left', maxWidth: wp(40)},
                  {color: colorSchemeText},
                ]}
              >
                {itemName}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginVertical: wp(1),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <StarRating
                    fullStarColor={gold_color}
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
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    const {DATA} = this.state;
    return (
      <View style={{backgroundColor: colorSchemeView}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingVertical: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: wp(2),
              }}
            >
              <Text
                style={[
                  startStyles.bold_16_gray,
                  {
                    color: colorSchemeText,
                  },
                ]}
              >
                Top Offers
              </Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={startStyles.regular_12_gray}>{L.see_more}</Text>
                  <Icon name={L.backIcon} size={wp(4)} color={gray_color} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{paddingStart: wp(2.5)}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItems}
            />
          </View>

          <View style={{paddingVertical: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: wp(2),
              }}
            >
              <Text
                style={[
                  startStyles.bold_16_gray,
                  {
                    color: colorSchemeText,
                    marginVertical: wp(1),
                  },
                ]}
              >
                Day Use
              </Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={startStyles.regular_12_gray}>{L.see_more}</Text>
                  <Icon name={L.backIcon} size={wp(4)} color={gray_color} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{paddingStart: wp(2.5)}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItems}
            />
          </View>

          <View style={{paddingVertical: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: wp(2),
              }}
            >
              <Text
                style={[
                  startStyles.bold_16_gray,
                  {
                    color: colorSchemeText,
                    marginVertical: wp(1),
                  },
                ]}
              >
                Day Use
              </Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={startStyles.regular_12_gray}>{L.see_more}</Text>
                  <Icon name={L.backIcon} size={wp(4)} color={gray_color} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{paddingStart: wp(2.5)}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItems}
            />
          </View>

          <View style={{paddingVertical: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: wp(2),
              }}
            >
              <Text
                style={[
                  startStyles.bold_16_gray,
                  {
                    color: colorSchemeText,
                    marginVertical: wp(1),
                  },
                ]}
              >
                Day Use
              </Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={startStyles.regular_12_gray}>{L.see_more}</Text>
                  <Icon name={L.backIcon} size={wp(4)} color={gray_color} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{paddingStart: wp(2.5)}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItems}
            />
          </View>

          <View style={{paddingVertical: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: wp(2),
              }}
            >
              <Text
                style={[
                  startStyles.bold_16_gray,
                  {
                    color: colorSchemeText,
                    marginVertical: wp(1),
                  },
                ]}
              >
                Day Use
              </Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={startStyles.regular_12_gray}>{L.see_more}</Text>
                  <Icon name={L.backIcon} size={wp(4)} color={gray_color} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{paddingStart: wp(2.5)}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItems}
            />
          </View>

          <View style={{paddingVertical: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: wp(4),
                marginVertical: wp(2),
              }}
            >
              <Text
                style={[
                  startStyles.bold_16_gray,
                  {
                    color: colorSchemeText,
                    marginVertical: wp(1),
                  },
                ]}
              >
                Day Use
              </Text>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={startStyles.regular_12_gray}>{L.see_more}</Text>
                  <Icon name={L.backIcon} size={wp(4)} color={gray_color} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{paddingStart: wp(2.5)}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItems}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CategoryItems;
