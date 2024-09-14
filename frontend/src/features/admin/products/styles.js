import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Space,
} from '../../../styles';

const {height} = Dimensions.get("window");

export const styles = StyleSheet.create({
  admin_products_container: {
    backgroundColor: 'white',
    marginBottom: Space.SPACE_10,
    alignItems: 'center',
  },
  admin_productItem_container: {
    margin: Space.SPACE_3,
  },
  admin_products_spinner: {
    height: height,
    alignItems: 'center',
  }
});
