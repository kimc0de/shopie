import {StyleSheet} from 'react-native';

import {
  FontSize,
  FontStyle,
  Space,
  BorderRadius,
} from '../../styles';

export const styles = StyleSheet.create({
  productSearch_container: {
    height: "85%",
    width: "100%",
    margin: Space.SPACE_4,
  },
  productSearch_item: {
    flexDirection: "row",
    margin: Space.SPACE_20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  },
  productSearch_title: {
    fontSize: FontSize.MEDIUM_1,
    fontWeight: FontStyle.BOLD,
    fontStyle: FontStyle.ITALIC,
    marginBottom: Space.SPACE_4,
  },
  productSearch_details: {
    fontSize: FontSize.SMALL_3,
    fontStyle: FontStyle.ITALIC,
  },
  productSearch_image: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.MEDIUM,
    marginRight: Space.SPACE_10,
  }
});
