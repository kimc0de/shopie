import {StyleSheet} from 'react-native';
import {
  BorderRadius,
  Space,
  toDp,
} from '../../styles';

export const styles = StyleSheet.create({
  cartIcon: {
    position: 'absolute',
    borderRadius: BorderRadius.PILL,
    paddingHorizontal: Space.SPACE_1,
    height: toDp(22),
    right: -24,
    top: -4,
  },
});
