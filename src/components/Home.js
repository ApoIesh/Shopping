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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      DATA: [
        {},
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
      DATA_IMAGES: [
        {
          id: 0,
          image:
            'https://m.media-amazon.com/images/I/51CaGImXs7L._AC_UL320_.jpg',
          title: 'Dahlia',
        }, // https://unsplash.com/photos/Jup6QMQdLnM
        {
          id: 1,
          image:
            'https://m.media-amazon.com/images/I/51CaGImXs7L._AC_UL320_.jpg',
          title: 'Sunflower',
        }, // https://unsplash.com/photos/oO62CP-g1EA
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1627522460108-215683bdc9f6',
          title: 'Zinnia',
        }, // https://unsplash.com/photos/gKMmJEvcyA8
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1587814213271-7a6625b76c33',
          title: 'Tulip',
        }, // https://unsplash.com/photos/N7zBDF1r7PM
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1588628566587-dbd176de94b4',
          title: 'Chrysanthemum',
        }, // https://unsplash.com/photos/GsGZJMK0bJc
        {
          id: 5,
          image: 'https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e',
          title: 'Hydrangea',
        }, // https://unsplash.com/photos/coIBOiWBPjk
        {
          title: 'data1',
          image:
            'https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg',
        },
        {
          title: 'data2',
          image:
            'https://www.whoa.in/201604-Whoa/10-alone-broken-image-mobile-wallpaper-hd-image.jpg',
        },
        {
          title: 'data3',
          image:
            'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          title: 'data4',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntlma5HASL0HAM-KiC01A-JX4MxKousAA6A&usqp=CAU',
        },
      ],
      category_data: [
        {
          name: 'Makeup',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          name: 'Electronics',
          image:
            'https://maisongalaxy.com/media/catalog/category/electronics_and_appliances.png',
        },
        {
          name: 'Kitchen',
          image:
            'https://cdn.vox-cdn.com/thumbor/Z4V7Pg9X2IEac6eCNAS8SIWSVbs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19859137/shutterstock_1042252666.jpg',
        },
        {
          name: 'Fashion',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          name: 'Computers',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1E-GcK5cMPctV_0XoZ9DqFdWRE4VZx0ZQA&usqp=CAU',
        },
        {
          name: 'Books',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLasqqbORduApgilN-I9giiKgd2QW_gKMHg&usqp=CAU',
        },
        {
          name: 'Tools',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_1397527_4402457_Egypt_EG_BAU_DC_OHL_Tools_DC_2x_379x304_1X._SY304_CB649320776_.jpg',
        },

        {
          name: 'Kitchen',
          image:
            'https://m.media-amazon.com/images/I/41M20xjPDgL._AC_SY200_.jpg',
        },
        {
          name: 'Toys',
          image:
            'https://m.media-amazon.com/images/I/81pZ3y+lX9L._AC_SY200_.jpg',
        },
        {
          name: 'Sports',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_N1ZTsXIfp9vRAj8XLwQyKxwnv2BxHDyJw&usqp=CAU',
        },
      ],
    };
  }

  renderCategory = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigate('CategoryItems')}>
        <View style={ownApp.category}>
          <Image source={{uri: item.image}} style={ownApp.category_image} />
          <Text style={[startStyles.bold_12_gray, {color: colorSchemeText}]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderItems = ({item, index}) => {
    const {DATA_IMAGES} = this.state;
    const itemName =
      item?.name?.length >= 45 ? item?.name?.slice('', 45) + '...' : item?.name;

    return (
      <View style={ownApp.viewItem}>
        {index === 0 ? (
          <Animated_Carousel
            data={DATA_IMAGES}
            imagStyle={ownApp.styleCarouselItem}
          />
        ) : (
          <TouchableOpacity>
            <View
              style={[ownApp.viewItems, {backgroundColor: colorSchemeView}]}
            >
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
        )}
      </View>
    );
  };

  render() {
    const {search, DATA, DATA_IMAGES, category_data} = this.state;
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <Snap_Carousel />

          <FlatList
            data={category_data}
            style={{paddingStart: wp(2)}}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderCategory}
          />

          <View style={ownApp.sec_title}>
            <Text style={[startStyles.customizedBig, {color: colorSchemeText}]}>
              {L.top_sell}
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
            // style={{paddingStart: wp(2)}}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItems}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
