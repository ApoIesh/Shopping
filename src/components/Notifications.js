import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  Image,
  Animated,
  TouchableOpacityBase,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import ownApp from './Assets/style/ownApp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import startStyles, {hp, wp} from './Assets/style/startStyles';
import {colorSchemeText, colorSchemeView} from '../App';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(hp(0)),
      scrollEvent: new Animated.Value(0),
      notifications: [
        {title: 'data seccsses', id: 1, time: '02.45 pm'},
        {title: 'data seccsses', id: 2, time: '02.45 pm'},
        {title: 'data seccsses', id: 3, time: '02.45 pm'},
        {title: 'data seccsses', id: 4, time: '02.45 pm'},
        {title: 'data seccsses', id: 5, time: '02.45 pm'},
        {title: 'data seccsses', id: 6, time: '02.45 pm'},
        {title: 'data seccsses', id: 7, time: '02.45 pm'},
        {title: 'data seccsses', id: 8, time: '02.45 pm'},
        {title: 'data seccsses', id: 9, time: '02.45 pm'},
        {title: 'data seccsses', id: 10, time: '02.45 pm'},
        {title: 'data seccsses', id: 11, time: '02.45 pm'},
        {title: 'data seccsses', id: 12, time: '02.45 pm'},
        {title: 'data seccsses', id: 13, time: '02.45 pm'},
        {title: 'data seccsses', id: 14, time: '02.45 pm'},
        {title: 'data seccsses', id: 15, time: '02.45 pm'},
        {title: 'data seccsses', id: 16, time: '02.45 pm'},
        {title: 'data seccsses', id: 17, time: '02.45 pm'},
        {title: 'data seccsses', id: 18, time: '02.45 pm'},
        {title: 'data seccsses', id: 19, time: '02.45 pm'},
        {title: 'data seccsses', id: 20, time: '02.45 pm'},
        {title: 'data seccsses', id: 21, time: '02.45 pm'},
        {title: 'data seccsses', id: 22, time: '02.45 pm'},
        {title: 'data seccsses', id: 23, time: '02.45 pm'},
        {title: 'data seccsses', id: 24, time: '02.45 pm'},
        {title: 'data seccsses', id: 25, time: '02.45 pm'},
        {title: 'data seccsses', id: 26, time: '02.45 pm'},
      ],
    };
  }
  startAnmi = () => {
    Animated.timing(this.state.animation, {
      toValue: hp(90),
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  componentDidMount() {
    this.startAnmi();
  }

  renderItem = ({item, index}) => {
    const {notifications, animation, scrollEvent} = this.state;

    //Animated
    const scale = scrollEvent.interpolate({
      inputRange: [-1, 0, hp(12) * index, hp(12) * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollEvent.interpolate({
      inputRange: [-1, 0, hp(12) * index, hp(12) * (index + 1)],
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        style={[
          {
            marginBottom: hp(2),
            backgroundColor: colorSchemeText,
            borderRadius: wp(4),
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            width: wp(92),
            height: hp(10),
            opacity: opacity,
            transform: [{scale}],
          },
        ]}
      >
        <View style={ownApp.notifications_image}>
          <Image
            source={require('./Assets/image/home.png')}
            style={ownApp.imageNot}
          />
        </View>

        <View style={ownApp.txetViewNot}>
          <Text style={[startStyles.bold_14_gray, {color: colorSchemeView}]}>
            {item.title}
          </Text>
          <TouchableOpacity>
            <Text style={startStyles.bold_14_gray}>{'details'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'flex-end', paddingVertical: wp(1.5)}}>
          <Text style={[startStyles.light_12_gray, {color: colorSchemeView}]}>
            {item.time}
          </Text>
        </View>
      </Animated.View>
    );
  };

  render() {
    const {notifications, animation, scrollEvent} = this.state;

    return (
      <SafeAreaView style={{backgroundColor: colorSchemeView, flex: 1}}>
        <Animated.FlatList
          data={notifications}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollEvent}}}],
            {useNativeDriver: true},
          )}
        />
      </SafeAreaView>
    );
  }
}

export default Notifications;
