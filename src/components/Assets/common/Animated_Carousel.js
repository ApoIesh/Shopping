import React from 'react';
import {SafeAreaView, View, Animated, Image} from 'react-native';
import {gray_color, Red_color, wp} from '../style/startStyles';

const Animated_Carousel = ({
  data,
  paddingHorizontal,
  marginTopPagination,
  marginBottomPagination,
  imagStyle,
  windowWidth,
  marginTop,
}) => {
  const scrollX = new Animated.Value(0);

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
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
        scrollEventThrottle={16}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                paddingHorizontal: paddingHorizontal ? paddingHorizontal : 0,
                alignItems: 'center',
                width: windowWidth,
              }}
            >
              <Image
              
                source={{uri: item.image ? item.image : item}}
                style={imagStyle}
              />
            </View>
          );
        }}
      />
      {data.length <= 1 ? null : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: marginTopPagination ? marginTopPagination : 0,
            marginBottom: marginBottomPagination ? marginBottomPagination : 0,
          }}
        >
          {data.map((item, index) => {
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
                Red_color,
                gray_color,
                gray_color,
              ],
            });
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (index - 3),
                windowWidth * (index - 2),
                windowWidth * (index - 1),
                windowWidth * index,
                windowWidth * (index + 1),
                windowWidth * (index + 2),
                windowWidth * (index + 3),
              ],
              outputRange: [0, wp(1), wp(1), wp(3), wp(1), wp(1), 0],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={index}
                style={{
                  marginTop: marginTop ? marginTop : wp(-5),
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
      )}
    </SafeAreaView>
  );
};

export {Animated_Carousel};
