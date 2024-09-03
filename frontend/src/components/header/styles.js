import {StyleSheet} from 'react-native';
import {
  Space,
  toDp,
} from '../../styles';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: Space.SPACE_10,
  },
  header_image: {
    height: toDp(200),
    width: toDp(200),
  }
});
