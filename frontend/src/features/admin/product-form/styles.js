import {StyleSheet} from 'react-native';

import {
  BorderRadius,
  Space,
} from '../../../styles';

export const styles = StyleSheet.create({
  productForm_label: {
    width: '80%',
    marginTop: Space.SPACE_1,
  },
  productForm_categoryPicker_container: {
    width: '80%',
    marginTop: Space.SPACE_1,
  },
  productForm_imageContainer: {
    width: 150,
    height: 150,
    borderColor: '#e0e0e0',
    marginTop: Space.SPACE_1,
    justifyContent: 'center',
    elevation: 10,
    borderRadius: BorderRadius.MEDIUM,
  },
  productForm_image: {
    width: '100%',
    height: '100%',
    borderRadius: BorderRadius.MEDIUM,
  },
  productForm_imageButton: {
    position: 'absolute',
    right: -70,
    bottom: 5,
    padding: 0,
    borderRadius: BorderRadius.PILL,
    elevation: 20,
  },
});
