import {StyleSheet} from 'react-native';

import {
  Space,
  BorderRadius,
  FontSize,
  FontStyle,
} from '../../styles';

const badge = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: Space.SPACE_2,
  borderRadius: BorderRadius.PILL,
  height: Space.SPACE_4,
  marginHorizontal: Space.SPACE_1,
};

const badge_label= {
  fontWeight: FontStyle.LIGHT,
  fontSize: FontSize.SMALL_1,
  textAlign: 'center',
  marginBottom: 1,
};

export const styles = StyleSheet.create({
  badge: {
    ...badge,
  },
  badge__active: {
    ...badge,
    backgroundColor: 'black',
  },
  badge__inactive: {
    ...badge,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  badge_label__active: {
    ...badge_label,
    color: 'white',
  },
  badge_label__inactive: {
    ...badge_label,
    color: 'black',
  },
});
