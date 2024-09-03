import {StyleSheet, Dimensions} from 'react-native';

import {
  BorderRadius,
  FontSize,
  FontStyle,
  Space,
} from '../../styles';

const {width} = Dimensions.get('window');

const CONTAINER_WIDTH = width / 2 - 20;
const CONTAINER_HEIGHT = width / 1.5;
const IMAGE_WIDTH = width / 3;
const IMAGE_HEIGHT = width / 3;
const CARD_HEIGHT = width / 2 - 20 - 9;

export const styles = StyleSheet.create({
  productContainer_wrapper: {
    marginTop: Space.SPACE_10,
    paddingBottom: 100,
  },
  productList_wrapper: {
    width: width / 2,
    backgroundColor: '#f8f7e2',
  },
  productCard_container: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
    borderRadius: BorderRadius.LARGE,
    marginTop: Space.SPACE_16,
    marginBottom: Space.SPACE_10,
    marginLeft: Space.SPACE_8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 8,
    backgroundColor: 'white',
  },
  productCard_image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    backgroundColor: 'transparent',
    position: 'absolute',
    marginTop: Space.SPACE_10,
  },
  productCard: {
    width: IMAGE_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'transparent',
  },
  productCard_title: {
    fontSize: FontSize.SMALL_3,
    fontWeight: FontStyle.BOLD,
    textAlign: 'center',
  },
  productCard_price: {
    fontSize: FontSize.SMALL_3,
    textAlign: 'center',
    marginTop: Space.SPACE_4,
  },
  productCard_add: {
    marginBottom: Space.SPACE_10,
  },
  productCard_unavailable: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});
