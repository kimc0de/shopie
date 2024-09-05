import {Dimensions, StyleSheet} from 'react-native';

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
  productCard: {
    width: CONTAINER_WIDTH,
      height: CONTAINER_HEIGHT,
      borderRadius: BorderRadius.MEDIUM,
      marginTop: Space.SPACE_2,
      marginBottom: Space.SPACE_4,
      alignItems: 'center',
      justifyContent: 'flex-start',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 2,
      backgroundColor: 'white',
  },
  productCard_image: {
    width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      backgroundColor: 'transparent',
      position: 'absolute',
      marginTop: Space.SPACE_2,
  },
  productCard_info: {
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
      marginTop: Space.SPACE_1,
  },
  // @TODO: Unify android & ios button look
  productCard_add: {
    marginBottom: Space.SPACE_1,
  },
  productCard_unavailable: {
    marginTop: 20,
      color: 'red',
      textAlign: 'center',
  },
});
