import {
  useEffect,
  useState,
  useCallback,
  useContext
} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import {Form} from '../../components/form';
import {Input} from '../../components/input';
import {Error} from '../../components/error';
import {AuthGlobal} from '../../features/auth/global';
import {loginUser} from '../../features/auth/actions';
import {PROFILE, REGISTER} from '../../routes';

import {styles} from './styles';

export const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate(PROFILE);
    }
  }, [context.stateUser.isAuthenticated]);

  const handleEmailChange = useCallback((text) => {
    setEmail(text.toLowerCase());
  }, []);

  const handlePasswordChange = useCallback((text) => {
    setPassword(text);
  }, []);

  const handleSubmit = useCallback(() => {
    const user = {
      email,
      password
    }

    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      loginUser(user, context.dispatch);
    }
  },[email, password]);

  return (
    <Form title="Login" style={styles.login_container} title_style={styles.login_title}>
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
      <View style={styles.login_buttonGroup_1}>
        {error ? <Error message={error} /> : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
      <View style={styles.login_buttonGroup_2}>
        <Text style={styles.login_registerText}>Don't have an account?</Text>
        <Button title="Register" onPress={() => props.navigation.navigate(REGISTER)} />
      </View>
    </Form>
  );
}
