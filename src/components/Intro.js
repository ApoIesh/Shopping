import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {L} from '../config';
import ownApp, {hp, wp} from './Assets/style/ownApp';
import {navigate} from '../NavigationActions';
import Icon from './Assets/common/Icon';
import {colorSchemeText, colorSchemeView} from '../App';
import startStyles from './Assets/style/startStyles';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      data: [
        {
          image: require('./Assets/image/intro.png'),
          titel: 'Order The Best',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
        },
        {
          image: require('./Assets/image/p15-removebg-preview.png'),
          titel: 'Order The Best',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
        },
        {
          image: require('./Assets/image/Small-shopping.png'),
          titel: 'Order The Best ',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
        },
      ],
    };
  }

  get pagination() {
    const {data, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        dotStyle={ownApp.pagination_view}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.3}
      />
    );
  }

  renderItem({item, index}) {
    return (
      <View style={ownApp.carousel_intro_view_1}>
        <Image style={ownApp.image_intro_item} source={item?.image} />
        <Text
          style={{
            ...startStyles.bold_16_black,
            color: colorSchemeText,
            marginTop: hp(4),
            marginBottom: hp(1.5),
          }}
        >
          {item?.titel}
        </Text>
        <Text
          style={{
            ...startStyles.regular_14_gray,
            textAlign: 'center',
            lineHeight: wp(7),
          }}
        >
          {item?.description}
        </Text>
      </View>
    );
  }

  render() {
    const {activeSlide, data} = this.state;
    return (
      <View style={{backgroundColor: colorSchemeView, flex: 1}}>
        {activeSlide > 0 ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('SignIn')}
          >
            <View style={ownApp.button_intro_view_skip}>
              <View style={ownApp.button_intro_view_skipTop}>
                <Text
                  style={[
                    startStyles.regular_14_gray,
                    {color: colorSchemeText},
                  ]}
                >
                  {L.skip}
                </Text>
                <Icon
                  type={'Entypo'}
                  name="arrow-long-right"
                  size={wp(2.7)}
                  color={colorSchemeText}
                  style={{marginStart: wp(2)}}
                />
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{height: hp(6)}} />
        )}

        <View style={ownApp.text_view}>
          <Text style={[startStyles.introBig, {color: colorSchemeText}]}>
            {L.welcome}
          </Text>
          <Text
            style={[
              startStyles.introSmall,
              {color: colorSchemeText, marginVertical: hp(2)},
            ]}
          >
            {'Shopping App'}
          </Text>
        </View>

        <Carousel
          autoplay={false}
          scrollEventThrottle={10}
          firstItem={0}
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={data}
          sliderWidth={wp(100)}
          itemWidth={wp(100)}
          enableSnap={true}
          enableMomentum={true}
          renderItem={this.renderItem}
          onSnapToItem={item => this.setState({activeSlide: item})}
        />
        <View>{this.pagination}</View>

        <View style={{marginVertical: wp(5)}}>
          <View style={ownApp.button_intro_view_2}>
            {activeSlide == 0 ? (
              <TouchableOpacity onPress={() => navigate('SignIn')}>
                <View style={ownApp.button_intro_view_skipButtom}>
                  <Text
                    style={[
                      startStyles.regular_14_gray,
                      {color: colorSchemeText},
                    ]}
                  >
                    {L.skip}
                  </Text>
                  <Icon
                    type={'Entypo'}
                    name="arrow-long-right"
                    size={wp(2.7)}
                    color={colorSchemeText}
                    style={{marginStart: wp(2)}}
                  />
                </View>
              </TouchableOpacity>
            ) : null}

            {activeSlide > 0 ? (
              <TouchableOpacity onPress={() => this.carousel.snapToPrev()}>
                <View style={ownApp.button_intro_view_3}>
                  <Icon
                    type={'MaterialCommunityIcons'}
                    name="chevron-double-left"
                    size={wp(4)}
                    color={colorSchemeText}
                  />
                  <Text
                    style={[
                      startStyles.regular_14_gray,
                      {color: colorSchemeText},
                    ]}
                  >
                    {L.back}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                if (activeSlide == 0 || activeSlide != 2) {
                  this.carousel.snapToNext();
                } else if (activeSlide == 2) {
                  navigate('SignIn');
                }
              }}
            >
              <View style={ownApp.button_intro_view_4}>
                <Text
                  style={[
                    startStyles.regular_14_gray,
                    {color: colorSchemeText},
                  ]}
                >
                  {L.next}
                </Text>
                <Icon
                  type={'MaterialCommunityIcons'}
                  name="chevron-double-right"
                  size={wp(4)}
                  color={colorSchemeText}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Intro;
