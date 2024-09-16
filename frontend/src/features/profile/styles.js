import {StyleSheet} from 'react-native';

import {
  BorderRadius,
  FontSize,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  profile_container: {
    flex: 1,
    alignItems: "center"
  },
  profile_subContainer: {
    alignItems: "center",
    marginTop: Space.SPACE_3,
  },
  profile_name: {
    fontSize: FontSize.MEDIUM_3,
  },
  profile_infoContainer: {
    marginTop: Space.SPACE_1,
  },
  profile_info: {
    margin: Space.SPACE_1,
  },
  profile_logoutBtn: {
    marginTop: Space.SPACE_1,
    marginBottom: Space.SPACE_5,
    padding: Space.SPACE_1,
    borderRadius: BorderRadius.SMALL,
  },
  profile_order: {
    marginTop: Space.SPACE_3,
    alignItems: "center",
    marginBottom: Space.SPACE_1,
  },
  profile_orderTitle: {
    fontSize: FontSize.MEDIUM_2,
  }
});
