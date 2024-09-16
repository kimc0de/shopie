import {createStackNavigator} from '@react-navigation/stack';
import {useContext} from 'react';

import {Login} from '../features/login';
import {Register} from '../features/register';
import {Profile} from '../features/profile';
import { AuthGlobal } from '../features/auth/global';

import {LOGIN, REGISTER, PROFILE} from '../routes';

const Stack = createStackNavigator();

export const UserNavigator = () => {
  const context = useContext(AuthGlobal);

  return (
    <Stack.Navigator>
      {context.stateUser.isAuthenticated ? (
        <Stack.Screen
          name={PROFILE}
          component={Profile}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={REGISTER}
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}
