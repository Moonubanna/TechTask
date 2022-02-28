import React, {Component} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {colors} from './theme';
import {
  CirclesLoader,
  PulseLoader,
  TextLoader,
  DotsLoader,
  ColorDotsLoader,
  NineCubesLoader,
  BubblesLoader,
} from 'react-native-indicator';

export default class Loader extends Component {
  render() {
    const {loader} = this.props;
    return (
      <Modal
        visible={loader}
        //animationType={'slide'}
        style={{borderWidth: 3, borderColor: 'red'}}
        transparent={true}>
        <View style={styles.container}>
          <BubblesLoader size={38} dotRadius={10} color={colors.white} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.transparent,
  },
});
