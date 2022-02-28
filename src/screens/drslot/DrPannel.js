import React, {useState, useContext, useEffect, createRef, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  RefreshControl,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
  Animated,
  FlatList,
  Easing,
  ImageBackground,
  Alert,
  Share,
  Platform,
} from 'react-native';
import {colors} from './../../common/theme';
import {DIMENS, SCREEN, WIDTH, HEIGHT, KEY} from './../../constants';
import {BookContext} from './../../contexts';
import * as Utils from './../../utils';
import * as HOC from './../../common/hoc';
import styles from './styles';
import {storeData, retrieveData} from './../../common/AsyncStorage';
// child components
import childName from './child_components/ChildName';
import childDate from './child_components/ChildDate';
import childTime from './child_components/ChildTime';
import childSlotDuration from './child_components/ChildSlotDuration';
import commonButton from './../../common/CommonButton';
// date picker (android/iOS)
import CommonDOBActionSheet from './../../common/CommonDOBActionSheet';
import CommonSlotSheet from './../../common/CommonSlotSheet';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
const DrPannel = ({}) => {
  const {navigation} = useContext(BookContext);

  const [isLoader, setIsLoader] = useState(false);
  const [slotArray, setSlotArray] = useState([15, 30, 45, 60]);
  const [txtName, setTxtName] = useState('Dr. Praveen singh');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [date, setDate] = useState('Select date');
  const [startTime, setStartTime] = useState('Start time');
  const [endTime, setEndTime] = useState('End time');
  const [slotDuration, setSlotDuration] = useState(15);
  const [isDateTimeType, setIsDateTimeType] = useState('date');
  const [isAndroidDateTimeVisible, setIsAndroidDateTimeVisible] =
    useState(false);
  const actionDOBSheetRef = createRef();
  const actionSheetSlotRef = createRef();

  const HeaderHOCView = HOC.HeaderHOC(View);
  useEffect(() => {}, []);

  const pressDate = () => {
    setIsDateTimeType('date');
    if (Platform.OS === 'android') {
      setIsAndroidDateTimeVisible(true);
    } else {
      actionDOBSheetRef.current?.open();
    }
  };
  // press time button handling both start and stop and also handling view for both platform
  const pressTime = type => {
    setIsDateTimeType(type);
    if (type === 'end' && startTime === 'Start time') {
      alert('Please select start time');
      return;
    }
    if (Platform.OS === 'android') {
      setIsAndroidDateTimeVisible(true);
    } else {
      actionDOBSheetRef.current?.open();
    }
  };
  const pressSubmitBottomSheet = () => {
    actionDOBSheetRef.current?.close();
  };
  const pressSlotDuration = () => {
    actionSheetSlotRef.current?.open();
  };
  const pressSlotItem = item => {
    actionSheetSlotRef.current?.close();
    setSlotDuration(item);
  };
  //handling date picker
  function onChange(event, selectedDate) {
    const selectedDateTime = selectedDate || currentDate;

    if (isDateTimeType === 'date') {
      setDate(Utils.convertDateObjFormat(selectedDateTime, 'YYYY-MM-DD'));
    } else if (isDateTimeType === 'start') {
      setStartTime(Utils.convertTimeObjFormat(selectedDateTime, 'HH:MM:SS'));
    } else {
      let strtTime = moment(startTime, 'HH:MM:SS');
      let edTime = moment(selectedDateTime, 'HH:MM:SS');
      console.warn('timeee', strtTime.isBefore(edTime));
      if (strtTime < edTime) {
        setEndTime(Utils.convertTimeObjFormat(selectedDateTime, 'HH:MM:SS'));
      }
    }
    // hide android and iOS datetime picker
    if (Platform.OS === 'android') {
      setIsAndroidDateTimeVisible(false);
    }
  }
  // navigate to appointment screen
  const pressButtonSubmit = () => {
    Utils.navigateWithParams(navigation, SCREEN.APPOINTMENT_BOOK, {
      slotDuration: slotDuration,
    });
  };
  // saved data into async storage
  const storeDataToAsync = async () => {
    await storeData(KEY.APPOINTMENT_INFO, {});
  };
  // retrive data from async storage
  const retriveDataToAsync = async () => {
    retrieveData(KEY.APPOINTMENT_INFO, result => {
      if (result) {
        console.warn(`retrive data:${result}`);
      }
    });
  };
  return (
    <HeaderHOCView
      isLoading={isLoader}
      style={styles.header}
      backPress={() => navigation.goBack()}
      isHeader={true}
      isBack={false}
      header={'Dr Pannel'}>
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={[styles.container]}>
            {childName(txtName, setTxtName)}
            {childDate(date, pressDate)}
            {childTime(startTime, pressTime, 'start')}
            {childTime(endTime, pressTime, 'end')}
            {childSlotDuration(slotDuration, pressSlotDuration)}
          </View>
          <View style={styles.bottomView}>
            {/* Common button for accept */}
            {commonButton(pressButtonSubmit, 'Submit', '50%', DIMENS.px_20)}
          </View>
        </ScrollView>
        {/* Callender for DOB */}
        {CommonDOBActionSheet(
          actionDOBSheetRef,
          pressSubmitBottomSheet,
          date,
          onChange,
          isDateTimeType,
        )}
        {CommonSlotSheet(actionSheetSlotRef, slotArray, pressSlotItem)}
        {isAndroidDateTimeVisible && (
          <DateTimePicker
            testID="dataPicker"
            minimumDate={new Date()}
            value={new Date()}
            mode={isDateTimeType === 'date' ? 'date' : 'time'}
            display="default"
            onChange={onChange}
            themeVariant="dark"
            maximumDate={new Date()}
            neutralButtonLabel="clear"
          />
        )}
      </View>
    </HeaderHOCView>
  );
};

export default DrPannel;
