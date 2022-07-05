import {Alert, Platform, ToastAndroid, } from 'react-native';
import LocalizedStrings from 'react-native-localization';
import en from './translations/en';
import ar from './translations/ar';

export const L = new LocalizedStrings({en: en, ar: ar});
export const changeLaguage = languageKey => {
  L.setLanguage(languageKey);
  // console.log(languageKey);
};

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}

function appendLeadingZeroes(n) {
  if (n <= 9) {
    return '0' + n;
  }
  return n;
}

export function handelDateTime(date) {
  const newFormat = new Date(date);
  const newDate =
    newFormat.getFullYear() +
    '-' +
    appendLeadingZeroes(newFormat.getMonth() + 1) +
    '-' +
    appendLeadingZeroes(newFormat.getDate());
  const time =
    appendLeadingZeroes(newFormat.getHours()) +
    ':' +
    appendLeadingZeroes(
      newFormat.getMinutes(),
    ); /*+ ':' + appendLeadingZeroes(newFormat.getSeconds())*/
  return {time: time /*tConvert(time)*/, date: newDate};
}

export function formatTime(timer) {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return timer ? `${getHours}:${getMinutes}:${getSeconds}` : `00:00:00`;
}

export const handelError = (dispatch, error) => {
  const {response} = error;
  const {data, status, config} = response;
  console.log(status, config);
  console.log(data);
  if (status == 400) {
    if (data?.message) {
      rendererror(data.message);
    }
    if (data?.errors) {
      dispatch({type: ERRORS, payload: data.errors});
    }
  } else if (status == 401) {
    //handel auth faild
    rendererror('something wrong');
  } else {
    rendererror('check connection');
  }
};

export const rendererror = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('', message, [{text: 'close', style: 'cancel'}]);
  }
};
