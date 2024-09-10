import {
  Text,
  ScrollView,
} from 'react-native';

import {styles} from './styles';

export const Form = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.form_container}>
      <Text style={styles.form_title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
}
