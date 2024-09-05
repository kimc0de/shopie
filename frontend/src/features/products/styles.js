import {StyleSheet, Dimensions} from 'react-native';

import {Space} from '../../styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  products: {
    marginTop: Space.SPACE_1,
    paddingBottom: Space.SPACE_10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  products_container: {
    flex: 1,
    marginTop: Space.SPACE_1,
    marginBottom: Space.SPACE_10,
  },
  productCard_wrapper: {
    width: width / 2,
    alignItems: 'center',
  },
});
