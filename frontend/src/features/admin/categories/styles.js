import {StyleSheet, Dimensions} from 'react-native';

import {
  Space,
} from '../../../styles';

const {width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  categories_container: {
    position: 'relative',
    height: '100%',
    paddingBottom: Space.SPACE_10,
  },
  categories_list: {
    marginBottom: Space.SPACE_10,
  },
  categories_inputContainer: {
    width: '70%',
  },
  categories_bottomBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: width,
    padding: Space.SPACE_3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  }
});
