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
  Blue_color,
  fontLight,
  fontRegular,
  gold_color,
  gray_color,
  Green_color,
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

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      add_cart: false,
      specifiAnimation: new Animated.Value(wp(0)),
      you_mayAnimation: new Animated.Value(wp(0)),
      ratingAnimation: new Animated.Value(wp(0)),
      specifi: false,
      you_may: false,
      rating: false,
      itemData: {
        image: [
          'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
        ],
        name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
        brand: 'Fresh',
        productDetails:
          'Fresh provides the best quality of home appliances creating technology that adds value to your life. Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
        rating: 4.5,
        reviews: '4.5K',
        salray: '1,020.00',
        discount: '1,400.00',
        discountRat: '-20%',
      },
      you_mayData: [
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          discount: '1,400.00',
          discountRat: '-20%',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          discount: '1,400.00',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          discount: '1,400.00',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          discount: '1,400.00',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          discount: '1,400.00',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
        {
          image:
            'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/47986/1.jpg?9144',
          name: 'Fresh El Shabah Stand Fan - 18 With Remote ',
          brand: 'Fresh',
          salray: '1,020.00',
          discount: '1,400.00',
          productDetails:
            'Fresh provides the best quality of home appliances creating technology that adds value to your life‎‎.‎‎ Fresh is a trustworthy and likeable brand in the home appliance market offering a full range of household appliances ',
          rating: 4,
          reviews: '4.5K',
        },
      ],
      ratingData: [
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
        {
          image: 'https://avatars.githubusercontent.com/u/89752459?s=96&v=4',
          name: 'mohammed',
          text:
            "the product itself is really good too its a simple formula and leaves your skin very soft / can double as a primer bc of the dimethicone, dries down pretty fast but the watery formula makes it feel very refreshing. i think its my new favourite moisturizer. fyi if you're like me and tried l'oreals hyaluron expert moisturizer before and it sometimes felt like it stung (though i dont even have sensitive skin, no acne or anything very normal skin) - this one doesnt at all! feels lighter too",
          rating: 4.5,
        },
      ],
    };
  }
  ratingPress = () => {
    const {rating, ratingAnimation} = this.state;
    if (rating === false) {
      this.setState({rating: !rating}),
        Animated.timing(ratingAnimation, {
          toValue: wp(30),
          duration: 700,
          useNativeDriver: false,
        }).start();
    } else {
      this.setState({rating: !rating}),
        Animated.timing(ratingAnimation, {
          toValue: wp(0),
          duration: 600,
          useNativeDriver: false,
        }).start();
    }
  };
  renderRating = ({item, index}) => {
    let ratText =
      item.text.length >= 70 ? item.text.slice('', 70) + '...' : item.text;
    return (
      <View
        style={{
          borderColor: colorSchemeText,
          backgroundColor: colorSchemeView,
          ...ownApp.renderItemRat,
        }}
      >
        <View style={ownApp.ren_itemImageView}>
          <Image
            source={{uri: item.image}}
            style={[ownApp.ren_itemImageRat, {shadowColor: colorSchemeText}]}
          />
        </View>
        <View>
          <View style={ownApp.ren_sec_itemDetil}>
            <Text
              style={[startStyles.regular_12_gray, {color: colorSchemeText}]}
            >
              {item.name}
            </Text>
            <View style={ownApp.ernStarItemView}>
              <StarRating
                fullStarColor={gold_color}
                starSize={wp(3.5)}
                containerStyle={{width: wp(3)}}
                disabled={true}
                maxStars={1}
                rating={item.rating}
              />
              <Text
                style={[
                  startStyles.regular_9_gray,
                  {
                    color: colorSchemeText,
                    marginHorizontal: wp(2),
                  },
                ]}
              >
                {item.rating}
              </Text>
            </View>
          </View>
          <Text
            style={[
              startStyles.light_12_gray,
              {color: colorSchemeText, maxWidth: wp(54)},
            ]}
          >
            {ratText}
          </Text>
        </View>
      </View>
    );
  };
  specifiPress = () => {
    const {specifiAnimation, specifi} = this.state;
    if (specifi === false) {
      this.setState({specifi: !specifi}),
        Animated.timing(specifiAnimation, {
          toValue: wp(22),
          duration: 600,
          useNativeDriver: false,
        }).start();
    } else {
      this.setState({specifi: !specifi}),
        Animated.timing(specifiAnimation, {
          toValue: wp(0),
          duration: 400,
          useNativeDriver: false,
        }).start();
    }
  };

  you_mayPress = () => {
    const {you_may, you_mayAnimation} = this.state;
    if (you_may === false) {
      this.setState({you_may: !you_may}),
        Animated.timing(you_mayAnimation, {
          toValue: wp(55),
          duration: 600,
          useNativeDriver: false,
        }).start();
    } else {
      this.setState({you_may: !you_may}),
        Animated.timing(you_mayAnimation, {
          toValue: wp(0),
          duration: 400,
          useNativeDriver: false,
        }).start();
    }
  };
  renderYou_may = ({item, index}) => {
    let itemName =
      item.name.length >= 13 ? item.name.slice('', 13) + '...' : item.name;
    return (
      <View
        style={[
          ownApp.youMayrenderItem,
          {backgroundColor: colorSchemeView, shadowColor: colorSchemeText},
        ]}
      >
        <Image source={{uri: item.image}} style={ownApp.youMayImage} />

        {item?.discountRat ? (
          <View style={ownApp.dis_ratYou_mayView}>
            <Text style={[startStyles.light_9_gray, {color: colorSchemeText}]}>
              {item.discountRat}
            </Text>
          </View>
        ) : null}

        <View style={{marginHorizontal: wp(2)}}>
          <Text
            style={[
              startStyles.bold_12_gray,
              {color: colorSchemeText, marginVertical: wp(0.5)},
            ]}
          >
            {itemName}
          </Text>

          <Text style={ownApp.salryYouMay}>
            <Text
              style={[startStyles.regular_12_gray, {color: colorSchemeText}]}
            >
              {L.currency + ' '}
            </Text>
            <Text
              style={[startStyles.regular_12_gray, {color: colorSchemeText}]}
            >
              {item.salray}
            </Text>
          </Text>
          {item?.discount ? (
            <Text style={ownApp.dis_view_youMay}>
              <Text
                style={[startStyles.regular_9_gray, {color: colorSchemeText}]}
              >
                {L.currency + ' '}
              </Text>
              <Text
                style={[startStyles.light_9_gray, {color: colorSchemeText}]}
              >
                {item.discount}
              </Text>
            </Text>
          ) : null}
        </View>
      </View>
    );
  };

  render() {
    const {
      add_cart,
      itemData,
      specifi,
      specifiAnimation,
      you_may,
      you_mayAnimation,
      you_mayData,
      rating,
      ratingAnimation,
      ratingData,
    } = this.state;

    const specifIcon =
      specifi == false ? 'chevron-down-sharp' : 'chevron-up-sharp';

    const you_mayIcon =
      you_may == false ? 'chevron-down-sharp' : 'chevron-up-sharp';
    const ritingIcon =
      rating == false ? 'chevron-down-sharp' : 'chevron-up-sharp';
    return (
      <View style={{backgroundColor: colorSchemeView, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animated_Carousel
            data={this.props.route.params.imagesData}
            windowWidth={wp(100)}
            marginTop={hp(-15)}
            imagStyle={ownApp.carousel_item}
          />
          <View style={[startStyles.view_92, ownApp.iconsView]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name={L.goIcon} size={wp(6.5)} color={Green_color} />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.setState({add_cart: !add_cart})}
              >
                <View style={ownApp.addCartView}>
                  {add_cart == false ? (
                    <Image
                      source={require('./Assets/image/cart-add.png')}
                      style={ownApp.addCartImage}
                    />
                  ) : (
                    <Image
                      source={require('./Assets/image/cart-check.png')}
                      style={ownApp.checkCartImage}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[ownApp.addCartView, {marginTop: wp(3)}]}>
                  <Image
                    source={require('./Assets/image/share-icon-40118.png')}
                    style={ownApp.shareImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[ownApp.viewRadiusItem, {backgroundColor: colorSchemeView}]}
          >
            <View style={startStyles.view_92}>
              <Text
                style={[
                  startStyles.bold_16_black,
                  {color: colorSchemeText, marginTop: hp(2)},
                ]}
              >
                {this.props.route.params.name}
              </Text>

              <View style={ownApp.brand_sec}>
                <Text
                  style={[
                    startStyles.regular_12_gray,
                    {color: colorSchemeText},
                  ]}
                >
                  {'Brand' + ' : '}
                </Text>
                <Text style={[startStyles.bold_12_gray]}>{this.props.route.params?.brand}</Text>
              </View>

              <View style={ownApp.salryItem}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginEnd: wp(3)}}>
                    <Text
                      style={[
                        startStyles.bold_16_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {L.currency + ' '}
                    </Text>
                    <Text
                      style={[
                        startStyles.bold_16_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {this.props.route.params.amount}
                    </Text>
                  </Text>

                  {this.props.route.params?.priceAfterDiscount ? (
                    <Text style={ownApp.dis_view_youMay}>
                      <Text
                        style={[
                          startStyles.light_12_gray,
                          {color: colorSchemeText},
                        ]}
                      >
                        {L.currency + ' '}
                      </Text>
                      <Text
                        style={[
                          startStyles.light_12_gray,
                          {color: colorSchemeText},
                        ]}
                      >
                        {this.props.route.params.priceAfterDiscount}
                      </Text>
                    </Text>
                  ) : null}
                </View>
                {this.props.route.params?.ratDiscount ? (
                  <View style={ownApp.dis_ratItemView}>
                    <Text
                      style={[
                        startStyles.light_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {this.props.route.params?.ratDiscount}
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={{marginVertical: hp(0.8)}}>
                <Text
                  style={[
                    startStyles.bold_12_gray,
                    {textAlign: 'justify', color: colorSchemeText},
                  ]}
                >
                  {this.props.route.params.productDetails}
                </Text>
              </View>

              <View style={[ownApp.itemsMenu, {borderColor: colorSchemeText}]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this.ratingPress}
                >
                  <View style={ownApp.ratingItemView}>
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {L.rating}
                    </Text>
                    <View style={ownApp.starsView}>
                      <StarRating
                        fullStarColor={gold_color}
                        starSize={wp(3.5)}
                        containerStyle={{width: wp(20)}}
                        disabled={true}
                        maxStars={5}
                        rating={this.props.route.params.rating}
                      />
                      <Text
                        style={[
                          startStyles.regular_9_gray,
                          {color: colorSchemeText, marginHorizontal: wp(2)},
                        ]}
                      >
                        {this.props.route.params.reviews}
                      </Text>
                      <Icon
                        name={ritingIcon}
                        color={colorSchemeText}
                        size={wp(3.5)}
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <Animated.FlatList
                  style={{height: ratingAnimation}}
                  data={ratingData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={this.renderRating}
                />
              </View>

              <View style={[ownApp.itemsMenu, {borderColor: colorSchemeText}]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.specifiPress}
                >
                  <View style={ownApp.itemMenu}>
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {L.specifications}
                    </Text>
                    <Icon name={specifIcon} size={wp(4)} />
                  </View>
                </TouchableOpacity>
                <Animated.View
                  style={[ownApp.specifiView, {height: specifiAnimation}]}
                >
                  <View>
                    <Text style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          startStyles.bold_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        {'SKU : '}
                      </Text>
                      <Text
                        style={[
                          startStyles.light_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        FR057HL1CIE9GNAFAMZ
                      </Text>
                    </Text>
                    <Text style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          startStyles.bold_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        {'Model : '}
                      </Text>
                      <Text
                        style={[
                          startStyles.light_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        FSF18
                      </Text>
                    </Text>
                    <Text style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          startStyles.bold_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        {'Production Country : '}
                      </Text>
                      <Text
                        style={[
                          startStyles.light_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        Egypt
                      </Text>
                    </Text>
                    <Text style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          startStyles.bold_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        {'Color : '}
                      </Text>
                      <Text
                        style={[
                          startStyles.light_12_black,
                          {color: colorSchemeText},
                        ]}
                      >
                        Black
                      </Text>
                    </Text>
                  </View>
                </Animated.View>
              </View>

              <View style={[ownApp.itemsMenu, {borderColor: colorSchemeText}]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.you_mayPress}
                >
                  <View style={ownApp.itemMenu}>
                    <Text
                      style={[
                        startStyles.regular_12_gray,
                        {color: colorSchemeText},
                      ]}
                    >
                      {L.you_may}
                    </Text>

                    <Icon name={you_mayIcon} size={wp(4)} />
                  </View>
                </TouchableOpacity>

                <Animated.FlatList
                  data={you_mayData}
                  style={{height: you_mayAnimation}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={this.renderYou_may}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
            borderTopWidth: 0.2,
            borderColor: light_gray_color,
            paddingVertical: wp(1.5),
          }}
        >
          <Main_Button
            label={'Add To Cart'}
            TextColor={colorSchemeView}
            onPress={() => this.setState({add_cart: !add_cart})}
            backgroundColor={colorSchemeText}
            borderRadius={wp(2)}
            activeOpacity={1}
            height={hp(5)}
            width={wp(65)}
            right={
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={
                    add_cart == false
                      ? require('./Assets/image/cart-add.png')
                      : require('./Assets/image/cart-check.png')
                  }
                  style={{
                    width: wp(6),
                    height: wp(6),
                    marginStart: wp(2),
                    resizeMode: 'contain',
                    tintColor:
                      add_cart == false ? colorSchemeView : Green_color,
                  }}
                />
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

export default Item;
