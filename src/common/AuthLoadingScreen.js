import React, {useState, useContext, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {colors} from './theme';
import {retrieveData} from './AsyncStorage';

import {SCREEN, DIMENS} from '../constants';
import * as Utils from '../utils';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  function _bootstrapAsync() {
    setTimeout(() => {
      Utils.clearStack(navigation, SCREEN.DOCTO_PANNEL);
    }, 3000);
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={colors.white}
        size="large"
      />
      <Text
        style={{
          color: colors.white,
          fontSize: DIMENS.txt_size_large,
        }}>
        {'Please wait...'}
      </Text>
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color_primary,
  },
});
