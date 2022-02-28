import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {DIMENS} from '../../../constants';
import {colors} from '../../../common/theme';

const ChildName = (txtName, setTxtName) => {
  return (
    <View style={styles.containerTextInput}>
      {/* Right text input */}
      <View style={styles.textInputView}>
        <TextInput
        editable={false}
          placeholder={'Dr. name'}
          placeholderTextColor={colors.white}
          keyboardType={'default'}
          onChangeText={text => setTxtName(text)}
          //onSubmitEditing={() => refPass.current.focus()}
          returnKeyType="next"
          value={txtName}
          style={{
            width: '100%',
            minHeight: DIMENS.px_55,
            maxHeight: DIMENS.px_55,
            color: colors.white,
            backgroundColor: colors.transparent,
            fontSize: DIMENS.txt_size_medium_1,
            marginLeft: DIMENS.px_10,
          }}
          autoCapitalize={'none'}
        />
      </View>
    </View>
  );
};
export default ChildName;

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
  },
});
