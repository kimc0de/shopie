import {StyleSheet} from 'react-native';

import {
  FontSize,
  FontStyle,
  Space,
  BorderRadius,
} from '../../styles';

export const styles = StyleSheet.create({
  cartItem_container: {
    flexDirection: "row",
    marginHorizontal: Space.SPACE_2,
    paddingVertical: Space.SPACE_2,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  },
  cartItem_content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartItem_name: {
    fontSize: FontSize.MEDIUM_1,
    fontWeight: FontStyle.BOLD,
  },
  cartItem_price: {
    fontSize: FontSize.SMALL_3,
    fontStyle: FontStyle.ITALIC,
  },
  cartItem_image: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.MEDIUM,
    marginRight: Space.SPACE_2,
  },

});
