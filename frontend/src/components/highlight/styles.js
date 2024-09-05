import {StyleSheet, Dimensions} from 'react-native';

import {
  BorderRadius,
  Space,
  toDp,
} from '../../styles';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  highlights_container: {
    flex: 1,
    minHeight: toDp(320),
    marginBottom: Space.SPACE_1,
    backgroundColor: '#f2f2f2',
  },
  highlights_swiper_wrapper: {
    width: width,
    alignItems: 'center',
    marginVertical: Space.SPACE_2,
  },
  highlights_swiper: {
    height: width / 2,
  },
  highlights_image: {
    width: width - 40,
    height: width / 2,
    borderRadius: BorderRadius.MEDIUM,
    marginHorizontal: Space.SPACE_3,
  },
});
