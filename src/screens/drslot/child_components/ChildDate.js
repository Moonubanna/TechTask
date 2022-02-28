import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {DIMENS} from '../../../constants';
import {colors} from '../../../common/theme';
import {IconX, ICON_TYPE} from '../../../common/Icons';

const ChildTime = (date, pressDate) => {
  return (
    <Pressable
      onPress={() => {
        pressDate();
      }}
      style={({pressed}) => [
        styles.containerTextInput,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      {/* Right text input */}
      <View style={styles.textInputView}>
        <Text
          style={{
            color: colors.white,
            fontSize: DIMENS.txt_size_medium_1,
            marginLeft: DIMENS.px_10,
          }}>
          {date}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: DIMENS.px_10,
          }}>
          <IconX
            origin={ICON_TYPE.ICONICONS}
            name="chevron-forward-outline"
            color={colors.white}
            size={24}
          />
        </View>
      </View>
    </Pressable>
  );
};
export default ChildTime;

const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DIMENS.px_20,
  },
  textInputView: {
    width: '100%',
    backgroundColor: colors.color_primary_dark,
    borderRadius: DIMENS.px_5,
    justifyContent: 'center',
    height: DIMENS.px_55,
  },
});
