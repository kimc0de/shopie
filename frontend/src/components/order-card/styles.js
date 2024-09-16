import {
  StyleSheet,
} from 'react-native';

import {
  BorderRadius,
  FontStyle,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  orderCard_container: {
    padding: Space.SPACE_2,
    marginHorizontal: Space.SPACE_HALF,
    marginVertical: Space.SPACE_2,
    borderRadius: BorderRadius.SMALL,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
  },
  orderCard_id_container: {
    padding: Space.SPACE_2,
    margin: Space.SPACE_HALF,
    borderRadius: BorderRadius.SMALL,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "solid",
  },
  orderCard_title: {
    backgroundColor: "#62B1F6",
    padding: Space.SPACE_1,
  },
  orderCard_priceContainer: {
    marginTop: Space.SPACE_1,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  orderCard_price: {
    fontWeight: FontStyle.BOLD,
  },
  orderCard_info_container: {
    margin: Space.SPACE_1,
  }
});
