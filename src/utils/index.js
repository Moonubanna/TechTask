import {NavigationActions, CommonActions} from '@react-navigation/native';
import moment from 'moment';


export function navigate(navigation, screen) {
  navigation.navigate(screen);
}

/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export function navigateWithParams(navigation, screen, params) {
  navigation.navigate(screen, params);
}

/**
 * Navigate back to previous route in history
 */
export function back(navigation) {
  navigation.goBack();
}

/* Clear Stack */
export function clearStack(navigation, screenName) {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: screenName}],
  });
  navigation.dispatch(resetAction);
}
export const copvertHtmlTotext = txt => {
  var text = txt
    .split(/[^A-Za-z]/)
    .filter(x => x !== '')
    .slice(1, -1)
    .join(' ');
  return text;
};
export const convertDateTimeFormate = date => {
  moment.locale('en');
  var dt = date;
  return moment(dt).format('MMMM Do, YYYY H:mma'); //basically you can do all
};

export const convertDateObjFormat = (dateTime, forShowFormat) => {
  var showDateValue = '';
  if (dateTime !== null || dateTime !== undefined) {
    showDateValue = moment(dateTime).format(forShowFormat);
  }
  return showDateValue;
};

export const convertTimeObjFormat = (time, forShowFormat) => {
  var showDateValue = '';
  if (time !== null || time !== undefined) {
    showDateValue = moment(time).format(forShowFormat);
  }
  return showDateValue;
};

export function getAge(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
export const lessThan18 = () => {
  let doctorValidDob = new Date().getTime() - 18 * 1000 * 60 * 60 * 24 * 365.25;
  let validyear = doctorValidDob; //this.state.groupid== Constants.USER_TYPE_DOCTOR_ID ? doctorValidDob : new Date()
  console.warn('jj :: ', validyear);
  return validyear;
};

export const timeSince = date => {
  date = new Date(date);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};