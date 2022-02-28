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
  childContainer: {
    flex: 1,
  },
  headerComponent: {
    width: '100%',
    padding: DIMENS.px_10,
    flexDirection: 'row',
  },
  buttonComponent: {
    backgroundColor: colors.white,
    borderRadius: DIMENS.px_30,
    paddingHorizontal: DIMENS.px_15,
    paddingVertical: DIMENS.px_12,
    borderColor: colors.grey400,
    borderWidth: DIMENS.px_1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotComponent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
