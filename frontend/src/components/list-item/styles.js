import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  Space,
} from '../../styles';

const {width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  listItem_container: {
    flexDirection: "row",
    padding: Space.SPACE_2,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    backgroundColor: "#f1f1f1", // background need to be set for remove button to be hidden
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listItem_itemName: {
    textAlign: "left",
    width: width / 4,
    margin: Space.SPACE_2,
    flexWrap: "wrap",
  },
  listItem_item: {
    textAlign: "center",
    width: width / 4,
    margin: Space.SPACE_2,
    flexWrap: "wrap",
  },
  listItem_image: {
    width: width / 4,
    height: 50,
  },
});
