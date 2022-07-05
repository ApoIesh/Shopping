'use strict';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {gray_color, light_gray_color} from './startStyles';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

//COLORS

//APP COLORS
export const Primary_color = '#5484';
export const Secondary_color = '#a88788';

export const icons_color = '#353434';
export const content_color = '#8b8989';
export const border_color = '#e8e8e8';
export const text_input_color = '#000';
export const button_color = '#161616';
export const placeholder_color = '#8b8989';

const ownApp = StyleSheet.create({
  //intro

  pagination_view: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(2 / 2),
    backgroundColor: '#fff',
  },
  carousel_intro_view_1: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(92),
  },
  image_intro_item: {
    width: wp(100),
    height: hp(40),
    resizeMode: 'contain',
    marginTop: hp(3.5),
    alignSelf: 'center',
  },
  button_intro_view_skip: {
    height: hp(4),
    alignSelf: 'flex-end',
    marginTop: hp(2),
  },
  button_intro_view_skipTop: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginEnd: wp(4),
  },
  text_view: {alignSelf: 'center', alignItems: 'center'},
  button_intro_view_2: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: wp(92),
  },
  button_intro_view_skipButtom: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  button_intro_view_3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button_intro_view_4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //SIGNIN
  welcomeView: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: hp(5),
  },
  rightPass: {flexDirection: 'row', alignSelf: 'center'},
  rememberIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2.5),
    alignSelf: 'flex-start',
    marginStart: wp(5),
    marginBottom: hp(5),
  },
  rememberIconView_1: {
    width: wp(5),
    height: wp(5),
    borderWidth: 0.2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: wp(3),
  },
  if_you_have: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: hp(5),
  },

  //SIGNUP

  termsIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2.5),
    alignSelf: 'flex-start',
    marginStart: wp(5),
    marginBottom: hp(5),
  },
  termsIconView_1: {
    width: wp(5),
    height: wp(5),
    borderWidth: 0.2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: wp(3),
  },

  tabBarStyle: {
    height: hp(4),
    elevation: 0,
    borderTopWidth: 0,
  },
  tabBarImage: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'green',
  },
  fadingText: {
    fontSize: 28,
    color: '#000',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },

  // notifications

  notifications_image: {
    backgroundColor: '#ccc',
    width: hp(6.5),
    height: hp(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1.5),
    marginVertical: hp(1),
    elevation: wp(1),
  },
  imageNot: {
    width: hp(4),
    height: hp(4),
  },
  txetViewNot: {
    justifyContent: 'space-between',
  },

  //HOME

  search_sec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  carousel_1: {
    resizeMode: 'cover',
    height: hp(20),
    borderRadius: wp(2),
    width: wp(90),
    marginVertical: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  carousel_2: {
    resizeMode: 'cover',
    height: hp(28),
    borderRadius: wp(5),
    width: wp(35),
  },
  category: {
    width: wp(20),
    height: wp(20),
    marginVertical: wp(5),
    marginHorizontal: wp(2),
    borderRadius: wp(20 / 2),
    alignItems: 'center',
  },
  category_image: {
    resizeMode: 'contain',
    width: wp(20),
    height: wp(20),
    borderRadius: wp(7),
    marginBottom: wp(1),
  },
  sec_title: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(92),
    alignSelf: 'center',
    alignItems: 'center',
  },
  viewItem: {
    marginHorizontal: wp(2.5),
    marginVertical: hp(1),
    height: hp(35),
    width: wp(45),
  },
  styleCarouselItem: {
    width: wp(45),
    height: hp(35),
    resizeMode: 'contain',
    borderWidth: wp(0.2),
    borderRadius: wp(2),
    borderColor: light_gray_color,
  },
  viewItems: {
    flexDirection: 'column',
    width: wp(45),
    height: hp(35),
    borderWidth: wp(0.2),
    borderRadius: wp(2),
    borderColor: light_gray_color,
  },
  imageItems: {
    width: wp(44.5),
    height: hp(20),
  },
  nameItems: {
    marginVertical: wp(1),
    textAlign: 'left',
  },
  starsView: {
    marginVertical: wp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  price_sec: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: wp(1),
  },
  styleDiscount: {
    marginStart: wp(2),
    textDecorationLine: 'line-through',
  },
  arrives_sec: {flexDirection: 'row', alignItems: 'center'},

  //Categories
  categorySelect: {
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    textAlign: 'center',
    lineHeight: wp(3.5),
    maxWidth: wp(15),
  },
  title_sec: {
    width: wp(23),
    alignSelf: 'flex-start',
    marginBottom: hp(6),
  },
  forYouText: {
    textAlign: 'center',
    lineHeight: wp(4.5),
    color: '#1a66ff',
  },
  details_sec: {
    width: wp(77),
    paddingHorizontal: wp(2),
  },
  title_sec_name: {
    marginVertical: wp(3),
    marginStart: wp(3),
  },
  splashImage: {
    width: wp(73),
    height: wp(22),
    resizeMode: 'cover',
    marginBottom: hp(3),
  },
  itemsMenu: {
    borderBottomWidth: 0.2,
    marginVertical: hp(1),
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: wp(2),
  },
});
export default ownApp;
