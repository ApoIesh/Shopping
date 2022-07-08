import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

//COLORS

export const black_color = '#000';
export const white_color = '#fff';
export const gray_color = '#8b8989';
export const light_gray_color = '#cccc';
export const Blue_color  ="#0000FF"
export const Red_color = "#FF0000"
export const Green_color = "#00aa90"
export const Yellow_color = "#FFFF00"
export const Purple_color="#800080"
export const gold_color="#FFD700"

//MAIN_COLORS
export const placeholder_color = '#cccc';
export const button_color = '#ffebcc';
export const icons_color = '#353434';
export const content_color = '#8b8989';
export const border_color = '#e8e8e8';
export const text_input_color = '#000';

//APP COLORS
export const Primary_color = '#5484';
export const Secondary_color = '#a88788';



//FONTS
export const fontLight = 'Proxima Nova Thin';
export const fontRegular = 'ProximaNova-Regular';
export const fontBold = 'Proxima Nova Bold';
export const fontExtrabold = 'Proxima Nova Extrabold';

const startStyles = StyleSheet.create({
  
  //STANDERED VIEWS
  view_100: { width: wp(100), alignSelf: 'center' },
  view_98: { width: wp(98), alignSelf: 'center' },
  view_96: { width: wp(96), alignSelf: 'center' },
  view_92: { width: wp(92), alignSelf: 'center' },
  view_90: { width: wp(90), alignSelf: 'center' },
  view_88: { width: wp(88), alignSelf: 'center' },

  container_black: { backgroundColor: black_color, },
  container_white: { backgroundColor: white_color, },

  //FONTES

  //40sp=10.2 wp
  //26sp=6.5 wp
  //20sp=5.1 wp
  //18sp=4.6 wp
  //16sp=4.1 wp
  //14sp=3.6 wp
  //12sp=3.1 wp
  //9sp=2.5 wp

  //LIGHT
  light_9_white: { fontFamily: fontLight, fontSize: wp(2.5), color: white_color, },
  light_9_black: { fontFamily: fontLight, fontSize: wp(2.5), color: black_color, },
  light_9_gray: { fontFamily: fontLight, fontSize: wp(2.5), color: gray_color, },
  light_12_white: { fontFamily: fontLight, fontSize: wp(3.1), color: white_color, },
  light_12_black: { fontFamily: fontLight, fontSize: wp(3.1), color: black_color, },
  light_12_gray: { fontFamily: fontLight, fontSize: wp(3.1), color: gray_color, },
  light_14_white: { fontFamily: fontLight, fontSze: wp(3.6), color: white_color, },
  light_14_black: { fontFamily: fontLight, fontSze: wp(3.6), color: black_color, },
  light_14_gray: { fontFamily: fontLight, fontSize: wp(3.6), color: gray_color, },
  light_16_white: { fontFamily: fontLight, fontSize: wp(4.1), color: white_color },
  light_16_black: { fontFamily: fontLight, fontSize: wp(4.1), color: black_color },
  light_16_gray: { fontFamily: fontLight, fontSize: wp(4.1), color: gray_color },
  light_18_white: { fontFamily: fontLight, fontSize: wp(4.6), color: white_color, },
  light_18_black: { fontFamily: fontLight, fontSize: wp(4.6), color: black_color, },
  light_18_gray: { fontFamily: fontLight, fontSize: wp(4.6), color: gray_color, },
  light_20_white: { fontFamily: fontLight, fontSize: wp(5.1), color: white_color, },
  light_20_black: { fontFamily: fontLight, fontSize: wp(5.1), color: black_color, },
  light_20_gray: { fontFamily: fontLight, fontSize: wp(5.1), color: gray_color, },
  light_26_white: { fontFamily: fontLight, fontSize: wp(6.5), color: white_color, },
  light_26_black: { fontFamily: fontLight, fontSize: wp(6.5), color: black_color, },
  light_26_gray: { fontFamily: fontLight, fontSize: wp(6.5), color: gray_color, },

  //REGULAR FONT
  regular_9_white: { fontFamily: fontRegular, fontSize: wp(2.5), color: white_color, },
  regular_9_black: { fontFamily: fontRegular, fontSize: wp(2.5), color: black_color, },
  regular_9_gray: { fontFamily: fontRegular, fontSize: wp(2.5), color: gray_color, },
  regular_12_white: { fontFamily: fontRegular, fontSize: wp(3.1), color: white_color, },
  regular_12_black: { fontFamily: fontRegular, fontSize: wp(3.1), color: black_color, },
  regular_12_gray: { fontFamily: fontRegular, fontSize: wp(3.1), color: gray_color, },
  regular_14_white: { fontFamily: fontRegular, fontSize: wp(3.6), color: white_color, },
  regular_14_black: { fontFamily: fontRegular, fontSize: wp(3.6), color: black_color, },
  regular_14_gray: { fontFamily: fontRegular, fontSize: wp(3.6), color: gray_color, },
  regular_16_white: { fontFamily: fontRegular, fontSize: wp(4.1), color: white_color },
  regular_16_black: { fontFamily: fontRegular, fontSize: wp(4.1), color: black_color },
  regular_16_gray: { fontFamily: fontRegular, fontSize: wp(4.1), color: gray_color },
  regular_18_white: { fontFamily: fontRegular, fontSize: wp(4.6), color: white_color, },
  regular_18_black: { fontFamily: fontRegular, fontSize: wp(4.6), color: black_color, },
  regular_18_gray: { fontFamily: fontRegular, fontSize: wp(4.6), color: gray_color, },
  regular_20_white: { fontFamily: fontRegular, fontSize: wp(5.1), color: white_color, },
  regular_20_black: { fontFamily: fontRegular, fontSize: wp(5.1), color: black_color, },
  regular_20_gray: { fontFamily: fontRegular, fontSize: wp(5.1), color: gray_color, },
  regular_26_white: { fontFamily: fontRegular, fontSize: wp(6.5), color: white_color, },
  regular_26_black: { fontFamily: fontRegular, fontSize: wp(6.5), color: black_color, },
  regular_26_gray: { fontFamily: fontRegular, fontSize: wp(6.5), color: gray_color, },

  //BOLD FONT
  bold_9_white: { fontFamily: fontBold, fontSize: wp(2.5), color: white_color, },
  bold_9_black: { fontFamily: fontBold, fontSize: wp(2.5), color: black_color, },
  bold_9_gray: { fontFamily: fontBold, fontSize: wp(2.5), color: gray_color, },
  bold_12_white: { fontFamily: fontBold, fontSize: wp(3.1), color: white_color, },
  bold_12_black: { fontFamily: fontBold, fontSize: wp(3.1), color: black_color, },
  bold_12_gray: { fontFamily: fontBold, fontSize: wp(3.1), color: gray_color, },
  bold_14_white: { fontFamily: fontBold, fontSize: wp(3.6), color: white_color, },
  bold_14_black: { fontFamily: fontBold, fontSize: wp(3.6), color: black_color, },
  bold_14_gray: { fontFamily: fontBold, fontSize: wp(3.6), color: gray_color, },
  bold_16_white: { fontFamily: fontBold, fontSize: wp(4.1), color: white_color },
  bold_16_black: { fontFamily: fontBold, fontSize: wp(4.1), color: black_color },
  bold_16_gray: { fontFamily: fontBold, fontSize: wp(4.1), color: gray_color },
  bold_18_white: { fontFamily: fontBold, fontSize: wp(4.6), color: white_color, },
  bold_18_black: { fontFamily: fontBold, fontSize: wp(4.6), color: black_color, },
  bold_18_gray: { fontFamily: fontBold, fontSize: wp(4.6), color: gray_color, },
  bold_20_white: { fontFamily: fontBold, fontSize: wp(5.1), color: white_color, },
  bold_20_black: { fontFamily: fontBold, fontSize: wp(5.1), color: black_color, },
  bold_20_gray: { fontFamily: fontBold, fontSize: wp(5.1), color: gray_color, },
  bold_26_white: { fontFamily: fontBold, fontSize: wp(6.5), color: white_color, },
  bold_26_black: { fontFamily: fontBold, fontSize: wp(6.5), color: black_color, },
  bold_26_gray: { fontFamily: fontBold, fontSize: wp(6.5), color: gray_color, },

  //EXTRABOLD FONT
  extraBold_9_white: { fontFamily: fontExtrabold, fontSize: wp(2.5), color: white_color, },
  extraBold_9_black: { fontFamily: fontExtrabold, fontSize: wp(2.5), color: black_color, },
  extraBold_9_gray: { fontFamily: fontExtrabold, fontSize: wp(2.5), color: gray_color, },
  extraBold_12_white: { fontFamily: fontExtrabold, fontSize: wp(3.1), color: white_color, },
  extraBold_12_black: { fontFamily: fontExtrabold, fontSize: wp(3.1), color: black_color, },
  extraBold_12_gray: { fontFamily: fontExtrabold, fontSize: wp(3.1), color: gray_color, },
  extraBold_14_white: { fontFamily: fontExtrabold, fontSize: wp(3.6), color: white_color, },
  extraBold_14_black: { fontFamily: fontExtrabold, fontSize: wp(3.6), color: black_color, },
  extraBold_14_gray: { fontFamily: fontExtrabold, fontSize: wp(3.6), color: gray_color, },
  extraBold_16_white: { fontFamily: fontExtrabold, fontSize: wp(4.1), color: white_color },
  extraBold_16_black: { fontFamily: fontExtrabold, fontSize: wp(4.1), color: black_color },
  extraBold_16_gray: { fontFamily: fontExtrabold, fontSize: wp(4.1), color: gray_color },
  extraBold_18_white: { fontFamily: fontExtrabold, fontSize: wp(4.6), color: white_color, },
  extraBold_18_black: { fontFamily: fontExtrabold, fontSize: wp(4.6), color: black_color, },
  extraBold_18_gray: { fontFamily: fontExtrabold, fontSize: wp(4.6), color: gray_color, },
  extraBold_20_white: { fontFamily: fontExtrabold, fontSize: wp(5.1), color: white_color, },
  extraBold_20_black: { fontFamily: fontExtrabold, fontSize: wp(5.1), color: black_color, },
  extraBold_20_gray: { fontFamily: fontExtrabold, fontSize: wp(5.1), color: gray_color, },
  extraBold_26_white: { fontFamily: fontExtrabold, fontSize: wp(6), color: white_color, },
  extraBold_26_black: { fontFamily: fontExtrabold, fontSize: wp(6), color: black_color },
  extraBold_26_gray: { fontFamily: fontExtrabold, fontSize: wp(6.5), color: gray_color, },

  //customizedText
  introBig:{fontSize:wp(7),fontFamily: fontRegular},
  introSmall:{fontSize:wp(5),fontFamily: fontBold},
  customizedText_1: { color: black_color, fontWeight: '300', fontSize: wp(9), },
  customizedText_2: { color: white_color, fontWeight: 'bold', fontSize: wp(8), },
  customizedText_3: { color: white_color, fontWeight: '100',fontSize: wp(6), },
  customizedText_4: { color: white_color, fontWeight: 'bold', fontSize: wp(6), },

  //customizedView
  line: { borderWidth: 0.2, borderColor: border_color, },
  sec_log_text: { fontFamily: fontBold, fontSize: wp(5), color: black_color, },
});
export default startStyles;