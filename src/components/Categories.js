import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {L} from '../config';
import {colorSchemeText, colorSchemeView} from '../App';
import startStyles, {hp, wp} from './Assets/style/startStyles';
import ownApp from './Assets/style/ownApp';
import Icon from './Assets/common/Icon';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      for_himAnimation: new Animated.Value(wp(0)),
      footwearAnimated: new Animated.Value(wp(0)),
      brandesAnimated: new Animated.Value(wp(0)),
      splashImage:
        'https://k.nooncdn.com/cms/pages/20220706/3354f3840c51d8808c8bf89bc15d9944/ar_dk_eg-hero-banner-01.gif',
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
          <TouchableWithoutFeedback>
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
      <TouchableOpacity activeOpacity={0.8} style={ownApp.itemsCategoryView}>
        <Image source={{uri: item.image}} style={ownApp.imageItemCategory} />
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

  handelPress = res => {
    const {
      for_himAnimation,
      for_him,
      footwearAnimated,
      footwear,
      brandesAnimated,
      brandes,
    } = this.state;
    if (res === 1) {
      if (for_him == false) {
        this.setState({for_him: true, footwear: false, brandes: false}),
          Animated.timing(for_himAnimation, {
            toValue: wp(87),
            duration: 700,
            useNativeDriver: false,
          }).start();
        Animated.timing(footwearAnimated, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
        Animated.timing(brandesAnimated, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
      } else {
        this.setState({for_him: false}),
          Animated.timing(for_himAnimation, {
            toValue: wp(0),
            duration: 500,
            useNativeDriver: false,
          }).start();
      }
    }
    if (res === 2) {
      if (footwear == false) {
        this.setState({footwear: true, for_him: false, brandes: false}),
          Animated.timing(footwearAnimated, {
            toValue: wp(87),
            duration: 700,
            useNativeDriver: false,
          }).start();
        Animated.timing(for_himAnimation, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
        Animated.timing(brandesAnimated, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
      } else {
        this.setState({footwear: false}),
          Animated.timing(footwearAnimated, {
            toValue: wp(0),
            duration: 500,
            useNativeDriver: false,
          }).start();
      }
    }
    if (res === 3) {
      if (brandes == false) {
        this.setState({brandes: true, for_him: false, footwear: false}),
          Animated.timing(brandesAnimated, {
            toValue: wp(87),
            duration: 700,
            useNativeDriver: false,
          }).start();
        Animated.timing(for_himAnimation, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
        Animated.timing(footwearAnimated, {
          toValue: wp(0),
          duration: 500,
          useNativeDriver: false,
        }).start();
      } else {
        this.setState({brandes: false}),
          Animated.timing(brandesAnimated, {
            toValue: wp(0),
            duration: 500,
            useNativeDriver: false,
          }).start();
      }
    }
  };

  render() {
    const {
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
                  onPress={() => this.handelPress(1)}
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
                  onPress={() => this.handelPress(2)}
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
                  onPress={() => this.handelPress(3)}
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

export default Categories;
