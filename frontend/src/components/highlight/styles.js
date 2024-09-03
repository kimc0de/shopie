import {StyleSheet, Dimensions} from 'react-native';

import {
  BorderRadius,
  Space,
} from '../../styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  highlights_container: {
    height: width / 2,
    marginBottom: Space.SPACE_10,
  },
  highlights_swiper: {
    width: width,
    alignItems: "center",
    marginTop: Space.SPACE_6,
  },
  highlights_image: {
    width: width - 40,
    height: width / 2,
    borderRadius: BorderRadius.PILL,
    marginHorizontal: Space.SPACE_10,
  },
});
