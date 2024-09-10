import {StyleSheet} from 'react-native';
import {
  BorderRadius, Space,
} from '../../styles';

export const styles = StyleSheet.create({
  checkout_confirmation: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkout_countryPicker: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: BorderRadius.SMALL,
    borderWidth: 1,
    borderColor: 'gray',
    paddingRight: Space.SPACE_2,
    alignSelf: 'center',
    marginVertical: Space.SPACE_2,
  }
});
