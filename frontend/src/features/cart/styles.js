import {Dimensions, StyleSheet} from 'react-native';

import {
  FontSize,
  FontStyle,
  Space,
} from '../../styles';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  cart_container: {
    flex: 1
  },
  cart_empty: {
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cart_bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Space.SPACE_2,
    elevation: 8,
  },
  cart_bottomRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart_totalPrice: {
    fontSize: FontSize.MEDIUM_1,
    fontWeight: FontStyle.BOLD,
    marginHorizontal: Space.SPACE_2,
  },
  hiddenButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: width / 5,
  }
});
