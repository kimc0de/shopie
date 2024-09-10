import {StyleSheet} from 'react-native';
import {
  BorderRadius,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    margin: Space.SPACE_2,
    borderRadius: BorderRadius.SMALL,
    borderWidth: 1,
    padding: Space.SPACE_2,
    borderColor: 'gray',
  }
});
