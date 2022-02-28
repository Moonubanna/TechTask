import React, {useState, useContext, useEffect, createRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {colors} from '../../common/theme';
import {DIMENS, SCREEN, WIDTH, HEIGHT} from '../../constants';
import {BookContext} from '../../contexts';
import * as Utils from '../../utils';
import * as HOC from '../../common/hoc';
import styles from './styles';

import childDoctor from './child_components/ChildDoctor';
import childSlotDuration from '../../common/CommonSlotSheet';

// import jsons
import appointment15Minute from './jsons/appointment15Minute.json';
import appointment30Minute from './jsons/appointment30Minute.json';
import appointment45Minute from './jsons/appointment45Minute.json';
import appointment60Minute from './jsons/appointment60Minute.json';

//route?.params?.slotDuration
const AppointmentBook = ({}) => {
  const {navigation, route} = useContext(BookContext);

  const [isLoader, setIsLoader] = useState(false);
  const [doctorName, setDoctorName] = useState('Select doctor');
  const [doctorArray, setDoctorArray] = useState([
    'Praveen singh',
    'Ram singh',
    'Ratan singh',
    'Mohan singh',
  ]);
  const [appointmentSlotObj, setAppointmentSlotObj] = useState(undefined);
  const [appoSelectedObj, setAppoSelectedObj] = useState(undefined);
  const [currentPos, setCurrentPos] = useState(0);
  const actionSheetSlotRef = createRef();

  const HeaderHOCView = HOC.HeaderHOC(View);
  useEffect(() => {
    if (route?.params?.slotDuration !== undefined) {
      if (route?.params?.slotDuration === 15) {
        setAppointmentSlotObj(appointment15Minute);
        setAppoSelectedObj(appointment15Minute.data[0]);
      } else if (route?.params?.slotDuration === 30) {
        setAppointmentSlotObj(appointment30Minute);
        setAppoSelectedObj(appointment30Minute.data[0]);
      } else if (route?.params?.slotDuration === 45) {
        setAppointmentSlotObj(appointment45Minute);
        setAppoSelectedObj(appointment45Minute.data[0]);
      } else {
        setAppointmentSlotObj(appointment60Minute);
        setAppoSelectedObj(appointment60Minute.data[0]);
      }
    }
  }, []);

  const pressDoctorName = () => {
    actionSheetSlotRef.current?.open();
  };
  const pressDoctorItem = item => {
    actionSheetSlotRef.current?.close();
    setDoctorName(item);
  };

  const pressSlotsItem = item => {
    alert(`selected slot: ${item}`);
  };

  const buttonPress = type => {
    let appoMainObj = appointmentSlotObj;
    if (type === 'PREVIOUS') {
      if (currentPos > 0) {
        setCurrentPos(currentPos - 1);
        setAppoSelectedObj(appoMainObj.data[currentPos - 1]);
      }
    } else {
      if (currentPos < appoMainObj.data.length - 1) {
        setCurrentPos(currentPos + 1);
        setAppoSelectedObj(appoMainObj.data[currentPos + 1]);
      }
    }
  };
  return (
    <HeaderHOCView
      isLoading={isLoader}
      style={styles.header}
      backPress={() => navigation.goBack()}
      isHeader={true}
      isBack={true}
      header={'Appointment Book'}>
      <View style={styles.container}>
        {childDoctor(doctorName, pressDoctorName)}
        {/* available slot view */}
        <View style={styles.childContainer}>
          {/* top view */}
          <View style={styles.headerComponent}>
            {/* prvious component */}
            {buttonComponent('PREVIOUS')}
            <Text
              style={{
                width: '33%',
                color: colors.white,
                fontSize: DIMENS.txt_size_medium,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              {appoSelectedObj !== undefined ? appoSelectedObj.date : 'Date'}
            </Text>
            {/* NEXT */}
            {buttonComponent('NEXT')}
          </View>
          {/* slot component */}
          <View style={styles.slotComponent}>
            {appoSelectedObj !== undefined &&
              appoSelectedObj.slot.map((item, index) => (
                <Pressable
                  onPress={() => {
                    pressSlotsItem(item);
                  }}
                  style={({pressed}) => [
                    {
                      opacity: pressed ? 0.5 : 1,
                      paddingVertical: DIMENS.px_10,
                      paddingHorizontal: DIMENS.px_25,
                      backgroundColor: colors.green600,
                      marginBottom: DIMENS.px_10,
                    },
                  ]}>
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: DIMENS.txt_size_large,
                    }}>
                    {item}
                  </Text>
                </Pressable>
              ))}
          </View>
        </View>
        {childSlotDuration(actionSheetSlotRef, doctorArray, pressDoctorItem)}
      </View>
    </HeaderHOCView>
  );

  function buttonComponent(name) {
    return (
      <Pressable
        onPress={() => {
          buttonPress(name);
        }}
        style={({pressed}) => [
          styles.buttonComponent,
          {
            width: '33%',
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <Text
          style={{
            color: colors.black,
            fontSize: DIMENS.txt_size_medium,
          }}>
          {name}
        </Text>
      </Pressable>
    );
  }
};

export default AppointmentBook;
