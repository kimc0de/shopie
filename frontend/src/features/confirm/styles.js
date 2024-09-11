import {StyleSheet, Dimensions} from 'react-native';
import {
  FontSize,
  FontStyle,
  Space,
} from '../../styles';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  confirm_container: {
    height: height,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  confirm_title_container:{
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirm_title: {
    fontSize: FontSize.SMALL_3,
    fontWeight: FontStyle.BOLD,
    padding: Space.SPACE_2,
  },
  confirm_body: {
    gap: Space.SPACE_1,
    padding: Space.SPACE_2,
    borderWidth: 1,
    borderColor: 'black',
  },
  confirm_info_title: {
    alignSelf: 'center',
    fontSize: FontSize.SMALL_2,
    fontWeight: FontStyle.BOLD,
  },
  confirm_listItems: {

  }
});
