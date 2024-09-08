import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  cart_container: {
    flex: 1
  },
  cart_empty: {
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
