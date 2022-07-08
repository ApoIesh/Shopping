import React, {Component, createRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import {colorSchemeText} from '../../../App';
import {gray_color, hp, Red_color, white_color, wp} from '../style/startStyles';

let CurrentSlide = 0;
let IntervalTime = 5000;
const windowWidth = wp(100);
const flatList = createRef();

const link = [
  'https://k.nooncdn.com/cms/pages/20220207/0dbba3adb9e696d49fac739325539ca2/ar_banner-01.png',
  'https://k.nooncdn.com/cms/pages/20220629/b18bb213c1f15a43e18c94e5fba66321/ar_dk_eg-hero-banner-01.gif',
  'https://k.nooncdn.com/cms/pages/20220628/4ef067cb4dc8c2b3c4647243182a0901/ar_dk_eg-hero-banner-04.gif',
  'https://k.nooncdn.com/cms/pages/20220207/0dbba3adb9e696d49fac739325539ca2/ar_banner-01.png',
  'https://k.nooncdn.com/cms/pages/20220629/d701425c350b35edee26c432db9a5113/ar_dk_eg-hero-banner-01.png',
  'https://k.nooncdn.com/cms/pages/20220629/b18bb213c1f15a43e18c94e5fba66321/ar_dk_eg-hero-banner-01.gif',
  'https://k.nooncdn.com/cms/pages/20220628/4ef067cb4dc8c2b3c4647243182a0901/ar_dk_eg-hero-banner-04.gif',
  'https://k.nooncdn.com/cms/pages/20220629/d701425c350b35edee26c432db9a5113/ar_dk_eg-hero-banner-01.png',
  'https://k.nooncdn.com/cms/pages/20220629/b18bb213c1f15a43e18c94e5fba66321/ar_dk_eg-hero-banner-01.gif',
];

class Snap_Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
    };
  }

  _goToNextPage = () => {
    if (CurrentSlide >= link.length - 1) CurrentSlide = 0;
    flatList.current.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  _startAutoPlay = () => {
    this._timerId = setInterval(this._goToNextPage, IntervalTime);
  };

  _stopAutoPlay = () => {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
  };

  componentDidMount() {
    this._stopAutoPlay();
    this._startAutoPlay();
  }

  componentWillUnmount() {
    this._stopAutoPlay();
  }

  render() {
    const {scrollX} = this.state;
    return (
      <View>
        <Animated.FlatList
          data={link}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          flatListRef={React.createRef()}
          ref={flatList}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={{width: wp(100), alignItems: 'center'}}>
                <Image
                  source={{uri: item}}
                  style={{
                    resizeMode: 'cover',
                    height: hp(15),
                    borderRadius: wp(2),
                    width: wp(96),
                    marginVertical: wp(2),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                />
              </View>
            );
          }}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            direction: 'inherit',
          }}
        >
          {link.map((item, index) => {
            const backgroundColor = scrollX.interpolate({
              inputRange: [
                windowWidth * (index - 2),
                windowWidth * (index - 1),
                windowWidth * index,
                windowWidth * (index + 1),
                windowWidth * (index + 2),
              ],
              outputRange: [
                gray_color,
                gray_color,
                colorSchemeText,
                gray_color,
                gray_color,
              ],
            });
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (index - 1),
                windowWidth * index,
                windowWidth * (index + 1),
              ],
              outputRange: [wp(1), wp(3), wp(1)],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={index}
                style={{
                  // marginTop: wp(-5),
                  marginHorizontal: wp(1),
                  borderRadius: wp(3),
                  backgroundColor: backgroundColor,
                  height: width === 0 ? 0 : wp(1),
                  width: width,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
export default Snap_Carousel;
