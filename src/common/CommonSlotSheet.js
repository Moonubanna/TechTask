import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import {colors} from './theme';
import {DIMENS} from '../constants';
import BottomSheet from 'react-native-raw-bottom-sheet';

const CommonSlotSheet = (actionSheetSlotRef, slotArray, pressSlotItem) => (
  <View style={styles.container}>
    <BottomSheet
      ref={actionSheetSlotRef}
      height={DIMENS.px_200}
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
      }}>
      <View style={styles.containerInner}>
        {slotArray.map((item, index) => (
          <Pressable
            onPress={() => {
              pressSlotItem(item);
            }}
            style={({pressed}) => [
              styles.childContainer,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}>
            <Text
              style={{
                color: colors.black,
                fontSize: DIMENS.txt_size_large,
              }}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </BottomSheet>
  </View>
);

export default CommonSlotSheet;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.grey500,
    alignSelf: 'center',
    borderTopLeftRadius: DIMENS.px_10,
    borderTopRightRadius: DIMENS.px_10,
  },
  childContainer: {
    width: '100%',
    padding: DIMENS.px_10,
    backgroundColor: colors.grey500,
    alignItems: 'center',
  },
});
