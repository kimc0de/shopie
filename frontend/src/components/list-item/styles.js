import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  BorderRadius,
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
  modal_container: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 5,
    right: 10,
  },
  modal_wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Space.SPACE_4,
  },
  modal_view: {
    margin: Space.SPACE_4,
    backgroundColor: "white",
    borderRadius: BorderRadius.SMALL,
    padding: Space.SPACE_5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});
