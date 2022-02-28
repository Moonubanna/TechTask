/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SCREEN} from './src/constants';
import {colors} from './src/common/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//screens
import Splash from './src/common/AuthLoadingScreen';
import DrPannel from './src/screens/drslot';
import AppointmentBook from './src/screens/appointmentbook';
const App = () => {
  const RootStack = createStackNavigator();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.color_primary}
      />
      <NavigationContainer>
        <RootStack.Navigator
          headerMode="none"
          screenOptions={{animationEnabled: false}}
          initialRouteName="Splash">
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{headerMode: 'none'}}
          />
          <RootStack.Screen name={SCREEN.DOCTO_PANNEL} component={DrPannel} />
          <RootStack.Screen
            name={SCREEN.APPOINTMENT_BOOK}
            component={AppointmentBook}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.color_primary,
  },
});
export default App;
