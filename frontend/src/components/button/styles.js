import {Dimensions, StyleSheet} from 'react-native';

import {
  BorderRadius,
  Space,
} from '../../styles';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  button: {
    margin: Space.SPACE_1,
    borderRadius: BorderRadius.SMALL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Type styles
  primary: {
    backgroundColor: 'black',
  },
  secondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  danger: {
    backgroundColor: 'red',
  },
  link: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  // Size styles
  small: {
    paddingVertical: Space.SPACE_1,
    paddingHorizontal: Space.SPACE_2,
  },
  medium: {
    paddingVertical: Space.SPACE_1,
    paddingHorizontal: Space.SPACE_4,
  },
  large: {
    paddingVertical: Space.SPACE_2,
    paddingHorizontal: Space.SPACE_6,
  },
  fullWidth: {
    paddingVertical: Space.SPACE_2,
    width: width,
  },
  // Text styles
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});
