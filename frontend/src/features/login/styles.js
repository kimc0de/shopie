import {StyleSheet} from 'react-native';

import {
  FontSize,
  FontStyle,
  Space,
} from '../../styles';

export const styles = StyleSheet.create({
  login_container: {
    flex: 1,
  },
  login_title: {
    fontSize: FontSize.LARGE_1,
    fontWeight: FontStyle.BOLD,
    marginBottom: Space.SPACE_3,
  },
  login_buttonGroup_1: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  login_buttonGroup_2: {
    marginTop: Space.SPACE_3,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  login_registerText: {
    marginVertical: Space.SPACE_1,
  },
});
