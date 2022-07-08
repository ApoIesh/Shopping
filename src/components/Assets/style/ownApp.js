'use strict';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {
  black_color,
  gold_color,
  gray_color,
  Green_color,
  light_gray_color,
  white_color,
} from './startStyles';

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
  buttonViewSignIn_1: {
    backgroundColor: Secondary_color,
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonViewSignIn_2: {
    borderRadius: wp(5),
    borderWidth: wp(0.3),
    padding: wp(1),
    borderColor: black_color,
  },
  imageViewSignIn: {
    width: wp(5),
    height: wp(5),
    tintColor: black_color,
  },
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
  buttonViewSignUp_1: {
    backgroundColor: Secondary_color,
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonViewSignUp_2: {
    borderRadius: wp(5),
    borderWidth: wp(0.3),
    padding: wp(1),
    borderColor: black_color,
  },
  imageViewSignUp: {
    width: wp(5),
    height: wp(5),
    tintColor: black_color,
  },
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
  itemsCategoryView: {
    width: wp(17),
    marginHorizontal: wp(3),
    alignItems: 'center',
    marginVertical: wp(3),
  },
  imageItemCategory: {
    width: wp(17),
    height: wp(17),
    resizeMode: 'cover',
    borderRadius: wp(3),
  },

  //Item
  carousel_item: {
    width: wp(100),
    height: hp(35),
    resizeMode: 'cover',
  },
  iconsView: {
    marginVertical: wp(3),
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCartView: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10 / 2),
    elevation: wp(2),
    backgroundColor: light_gray_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCartImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    marginStart: wp(-1),
  },
  checkCartImage: {
    marginStart: wp(-1),
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    tintColor: Green_color,
  },
  shareImage: {
    marginStart: wp(-0.5),
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: black_color,
  },
  viewRadiusItem: {
    marginTop: hp(-5),
    borderTopRightRadius: hp(3),
    borderTopLeftRadius: hp(3),
  },
  brand_sec: {flexDirection: 'row', marginVertical: hp(0.8)},
  specifiView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginStart: wp(2),
    overflow: 'hidden',
  },
  youMayrenderItem: {
    elevation: wp(2),
    height: wp(50),
    margin: wp(2),
    borderRadius: wp(2),
    shadowOffset: {
      height: wp(2),
      width: wp(2),
    },
  },
  youMayImage: {
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
    height: wp(30),
    resizeMode: 'contain',
  },
  dis_ratYou_mayView: {
    position: 'absolute',
    backgroundColor: Green_color,
    alignSelf: 'flex-end',
    marginTop: wp(2),
    padding: wp(0.5),
    borderTopStartRadius: wp(0.8),
    borderBottomStartRadius: wp(0.8),
  },
  salryYouMay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: wp(0.5),
  },
  dis_view_youMay: {
    marginVertical: wp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-around',
    textDecorationLine: 'line-through',
  },
  salryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dis_ratItemView: {
    backgroundColor: Green_color,
    alignSelf: 'center',
    padding: wp(1),
    borderTopStartRadius: wp(0.8),
    borderBottomStartRadius: wp(0.8),
  },
  ratingItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  renderItemRat: {
    borderWidth: 0.3,
    width: wp(75),
    height: wp(20),
    margin: wp(2),
    borderRadius: wp(2),
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ren_itemImageView: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15 / 2),
    elevation: wp(1),
  },
  ren_itemImageRat: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15 / 2),
  },
  ren_sec_itemDetil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ernStarItemView: {
    marginVertical: wp(1),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  //PROFILE
  registerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: wp(2),
    marginTop: hp(5),
  },
});
export default ownApp;
