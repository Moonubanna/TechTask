import React from 'react';
import {Pressable, Text} from 'react-native';

import {colors} from './theme';
import {DIMENS} from '../constants';

const CommonButton = (onSearchPress, name, widthPercent, marginTop) => (
  <Pressable
    onPress={onSearchPress}
    style={({pressed}) => [
      {
        width: widthPercent,
        backgroundColor: colors.color_accent,
        opacity: pressed ? 0.5 : 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: DIMENS.px_10,
        marginTop: marginTop,
        borderRadius: DIMENS.px_5,
        alignSelf: 'center',
      },
    ]}>
    <Text
      style={{
        color: colors.white,
        fontSize: DIMENS.txt_size_large,
      }}>
      {name}
    </Text>
  </Pressable>
);
export default CommonButton;