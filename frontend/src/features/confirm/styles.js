import {StyleSheet, Dimensions} from 'react-native';
import {
  BorderRadius,
  FontSize,
  FontStyle,
  Space,
} from '../../styles';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  confirm_container: {
    flex: 1,
    height: height,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  confirm_title: {
    alignSelf: 'center',
    fontSize: FontSize.SMALL_3,
    fontWeight: FontStyle.BOLD,
  },
  confirm_body: {
    width: '90%',
    gap: Space.SPACE_1,
    margin: Space.SPACE_2,
    padding: Space.SPACE_2,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: BorderRadius.SMALL,
  },
  confirm_info_title: {
    paddingBottom: Space.SPACE_2,
    paddingTop: Space.SPACE_1,
    fontSize: FontSize.SMALL_2,
    fontWeight: FontStyle.BOLD,
  },
  confirm_placeOrderButton: {
    padding: Space.SPACE_2,
  }
});
