import {StyleSheet, Dimensions} from 'react-native';
import {
  FontSize,
} from '../../styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  form_container: {
    marginTop: 10,
    marginBottom: 400,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_title: {
    fontSize: FontSize.SMALL_3,
  }
});
