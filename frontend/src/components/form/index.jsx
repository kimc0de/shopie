import {
  Text,
  ScrollView,
} from 'react-native';

import {styles} from './styles';

export const Form = (props) => {
  return (
    <ScrollView contentContainerStyle={[styles.form_container, props.style]}>
      {props.title && <Text style={[styles.form_title, props.title_style]}>{props.title}</Text>}
      {props.children}
    </ScrollView>
  );
}
