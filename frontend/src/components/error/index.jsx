import {
  View,
  Text
} from 'react-native';

import {styles} from './styles';

export const Error = (props) => {
  return (
    <View style={styles.error_container}>
      <Text style={styles.error_message}>{props.message}</Text>
    </View>
  );
}
