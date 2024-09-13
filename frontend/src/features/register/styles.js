import {StyleSheet} from 'react-native';

import {
  FontSize,
  FontStyle,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  register_container: {
    flex: 1,
  },
  register_title: {
    fontSize: FontSize.LARGE_1,
    fontWeight: FontStyle.BOLD,
    marginBottom: Space.SPACE_3,
  },
  register_buttonGroup_1: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  register_buttonGroup_2: {
    marginTop: Space.SPACE_3,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  register_loginText: {
    marginVertical: Space.SPACE_1,
  },
});
