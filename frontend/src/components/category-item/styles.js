import {StyleSheet} from 'react-native';
import {
  BorderRadius,
  Space
} from '../../styles';

export const styles = StyleSheet.create({
  categoryItem_container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: BorderRadius.SMALL,
    margin: Space.SPACE_1,
    padding: Space.SPACE_1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
