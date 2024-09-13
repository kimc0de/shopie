import {StyleSheet} from 'react-native';
import {
  FontSize,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  error_container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Space.SPACE_1,
  },
  error_message: {
    color: 'red',
    fontSize: FontSize.SMALL_2,
  }
});
