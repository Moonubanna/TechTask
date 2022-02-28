import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {colors} from '../theme';
import {DIMENS} from '../../constants';
import Loader from '../Loader';
//Vector icons
import {IconX, ICON_TYPE} from '../Icons';
const HeaderHOC =
  Comp =>
  ({isHeader, header, isLoading, isBack, backPress, children, ...props}) => {
    return (
      <View style={styles.mainContainer}>
        {isHeader && (
          <View style={styles.childContainer}>
            <Pressable
              onPress={backPress}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              {isBack ? (
                <IconX
                  origin={ICON_TYPE.ICONICONS}
                  name="arrow-back"
                  color={colors.white}
                  size={32}
                />
              ) : null}
            </Pressable>
            <Text style={styles.heading} numberOfLines={1}>
              {header}
            </Text>
          </View>
        )}
        <Comp {...props}>{children}</Comp>
        {isLoading != undefined && isLoading && <Loader />}
      </View>
    );
  };

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  childContainer: {
    flexDirection: 'row',
    width: '100%',
    height: DIMENS.px_55,
    alignItems: 'center',
    paddingHorizontal: DIMENS.px_10,
    backgroundColor: colors.color_primary,
  },
  heading: {
    marginLeft: DIMENS.px_20,
    fontSize: DIMENS.txt_size_large_extra,
    color: colors.white,
  },
});
export default HeaderHOC;
