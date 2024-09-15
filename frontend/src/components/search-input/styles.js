import {StyleSheet} from 'react-native';

import {
  BorderRadius,
  FontSize,
  Space,
  toDp,
} from '../../styles';

const searchBar = {
  padding: Space.SPACE_2,
  flexDirection: "row",
  backgroundColor: "#f2f2f2",
  borderRadius: BorderRadius.EXTRA_LARGE,
  alignItems: "center",
}

export const styles = StyleSheet.create({
  searchBar_container: {
    marginVertical: Space.SPACE_1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar_searchIcon: {
    marginLeft: Space.SPACE_1,
  },
  searchBar_closeIcon: {
    marginRight: Space.SPACE_1,
  },
  searchBar__unFocused: {
    ...searchBar,
    width: "95%",
  },
  searchBar__focused: {
    ...searchBar,
    width: "80%",
    justifyContent: "space-between",
  },
  searchBar_input: {
    fontSize: FontSize.SMALL_3,
    marginLeft: Space.SPACE_2,
    width: "75%",
    height: toDp(20),
  },
  searchBar_cancelButton: {
    marginLeft: Space.SPACE_HALF,
  }
});
