import {
  TextInput,
} from 'react-native';

import {styles} from './styles';

export const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      onFocus={props.onFocus}
      autoCorrect={props.autoCorrect}
      keyboardType={props.keyboardType}
    />
  );
}
