import {useCallback, useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

import {register} from '../../api';
import {Form} from '../../components/form';
import {Input} from '../../components/input';
import {Error} from '../../components/error';
import {Button} from '../../components/button';
import * as enums from '../../components/button/enums';
import {LOGIN} from '../../routes';

import {styles} from './styles';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password || !name || !phone) {
      setError('All fields are required!');
    }

    let user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      isAdmin: false,
    };

    register(user).then((res) => {
      if (res.status === 200) {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'Registration successful',
          text2: 'You can now login',
        });

        setTimeout(() => {
          props.navigation.navigate(LOGIN);
        }, 500);
      }
    }).catch(() => {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Something went wrong.',
        text2: 'Please try again.',
      });
    });
  };

  const handleEmailChange = useCallback((text) => {
    setEmail(text.toLowerCase());
  }, []);

  const handleNameChange = useCallback((text) => {
    setName(text);
  }, []);

  const handlePhoneChange = useCallback((text) => {
    setPhone(text);
  }, []);

  const handlePasswordChange = useCallback((text) => {
    setPassword(text);
  }, []);

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <Form title="Register" style={styles.register_container} title_style={styles.register_title}>
        <Input
          placeholder="Name"
          value={name}
          name="name"
          id="name"
          onChangeText={handleNameChange}
        />
        <Input
          placeholder="Phone"
          value={phone}
          name="phone"
          id="phone"
          onChangeText={handlePhoneChange}
        />
        <Input
          placeholder="Email"
          value={email}
          name="email"
          id="email"
          onChangeText={handleEmailChange}
        />
        <Input
          placeholder="Password"
          value={password}
          name="password"
          id="password"
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <View style={styles.register_buttonGroup_1}>
          {error ? <Error message={error} /> : null}
          <Button
            title="Register"
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.register_buttonGroup_2}>
          <Text style={styles.register_loginText}>Already have an account?</Text>
          <Button
            type={enums.SECONDARY}
            title="Login"
            onPress={() => props.navigation.navigate(LOGIN)}
          />
        </View>
      </Form>
    </KeyboardAwareScrollView>
  );
}
