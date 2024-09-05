import {
  Text,
  View,
} from 'react-native';

import {styles} from './styles';

export const Badge = (props) => {
  return (
    <View style={props.active ? styles.badge__active : styles.badge__inactive}>
      <Text
        numberOfLines={1}
        style={
          props.active
            ? styles.badge_label__active
            : styles.badge_label__inactive}
      >
        {props.label}
      </Text>
    </View>
  )
}
