import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  FontStyle,
  Space,
} from '../../styles';

const {width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  listHeader_container: {
    flexDirection: "row",
    paddingVertical: Space.SPACE_2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listHeader_item: {
    flexDirection: "row",
    justifyContent: "center",
    width: width / 4,
    flexWrap: "wrap",
  },
  listHeader_itemText: {
    fontWeight: FontStyle.BOLD,
  }
});
