import {StyleSheet} from 'react-native';
import {
  Space,
  toDp,
} from '../../styles';

export const HEADER_HEIGHT = toDp(50);
export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: HEADER_HEIGHT,
    alignItems: 'center',
    marginTop: Space.SPACE_8,
  },
  header_image: {
    height: toDp(50),
    width: toDp(50),
  }
});
