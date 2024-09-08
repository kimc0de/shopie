import {StyleSheet, Dimensions} from 'react-native';

import {Space} from '../../styles';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  products: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  products_section: {
    flex: 1,
    alignItems: 'center',
    marginTop: Space.SPACE_1,
    marginBottom: Space.SPACE_20,
  },
  productCard_wrapper: {
    width: width / 2,
    alignItems: 'center',
  },
  productsList_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  products_notfound: {
    justifyContent: 'center',
    height: height / 2,
  }
});
