import {StyleSheet} from 'react-native';

import {
  FontSize,
  FontStyle,
  Space,
  BorderRadius,
} from '../../styles';

export const styles = StyleSheet.create({
  productSearch_container: {
    margin: Space.SPACE_1,
    position: "absolute",
    left: -210,
  },
  productSearch_item: {
    flexDirection: "row",
    margin: Space.SPACE_2,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  },
  productSearch_title: {
    fontSize: FontSize.MEDIUM_1,
    fontWeight: FontStyle.BOLD,
    fontStyle: FontStyle.ITALIC,
    marginBottom: Space.SPACE_2,
  },
  productSearch_details: {
    width: '90%',
    fontSize: FontSize.SMALL_3,
    fontStyle: FontStyle.ITALIC,
  },
  productSearch_image: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.MEDIUM,
    marginRight: Space.SPACE_2,
  }
});
