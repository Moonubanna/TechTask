import {StyleSheet} from 'react-native';
import {colors} from '../../common/theme';
import {DIMENS} from './../../constants';
export default StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.color_primary,
  },
  container: {
    backgroundColor: colors.color_primary,
    flex: 1,
    padding: DIMENS.px_10,
  },
  textContainer: {
    width: '100%',
    color: colors.white,
    fontSize: DIMENS.txt_size_medium_14,
    textAlign: 'center',
  },
  indicatorView: {
    color: colors.orange400,
  },
  bottomView: {
    width: '100%',
  },
});
