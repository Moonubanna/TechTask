import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from './theme';
import {DIMENS} from '../constants';
import BottomSheet from 'react-native-raw-bottom-sheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import commonButton from './CommonButton';

const CommonDOBActionSheet = (
  actionSheetRef,
  pressSubmitBottomSheet,
  date,
  onChange,
  isDateTimeType,
) => (
  <View style={styles.container}>
    <BottomSheet
      ref={actionSheetRef}
      height={DIMENS.px_320}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={true}
      closeOnPressBack={true}
      dragFromTopOnly={true}
      customStyles={{
        container: styles.container,
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: colors.white,
        },
      }}
      //customStyles={styles.container}
    >
      {/* Showing list bellow */}
      <View style={styles.containerInner}>
        <DateTimePicker
          testID="dataPicker"
          value={date}
          mode={isDateTimeType === 'date' ? 'date' : 'time'}
          display="spinner"
          onChange={onChange}
          themeVariant="dark"
          maximumDate={new Date()}
          neutralButtonLabel="clear"
        />
        <View style={styles.bottomView}>
          {/* Common button for accept */}
          {commonButton(pressSubmitBottomSheet, 'Submit', '100%', DIMENS.px_10)}
        </View>
      </View>
    </BottomSheet>
  </View>
);

export default CommonDOBActionSheet;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.grey500,
    alignSelf: 'center',
    borderTopLeftRadius: DIMENS.px_10,
    borderTopRightRadius: DIMENS.px_10,
  },
  containerInner: {
    width: '100%',
  },
  bottomView: {
    width: '100%',
  },
});
