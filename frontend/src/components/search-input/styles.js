import {StyleSheet} from 'react-native';

import {
  BorderRadius,
  FontSize,
  Space,
  toDp,
} from '../../styles';

const searchBar = {
  padding: Space.SPACE_4,
  flexDirection: "row",
  backgroundColor: "#d9dbda",
  borderRadius: BorderRadius.EXTRA_LARGE,
  alignItems: "center",
}

export const styles = StyleSheet.create({
  searchBar_container: {
    marginHorizontal: Space.SPACE_16,
    marginVertical: Space.SPACE_8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar_searchIcon: {
    marginLeft: Space.SPACE_10,
  },
  searchBar_closeIcon: {
    marginRight: Space.SPACE_10,
  },
  searchBar__unFocused: {
    ...searchBar,
    width: "95%",
  },
  searchBar__focused: {
    ...searchBar,
    width: "80%",
    justifyContent: "space-evenly",
  },
  searchBar_input: {
    fontSize: FontSize.EXTRA_1,
    marginLeft: Space.SPACE_16,
    width: "90%",
    height: toDp(150),
  },
  searchBar_cancelButton: {
    marginLeft: Space.SPACE_4,
  }
});
