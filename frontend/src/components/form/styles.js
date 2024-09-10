import {StyleSheet, Dimensions} from 'react-native';
import {
  FontSize,
  Space,
} from '../../styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  form_container: {
    marginTop: Space.SPACE_2,
    marginBottom: Space.SPACE_4,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_title: {
    fontSize: FontSize.SMALL_3,
  }
});
