import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../features/login';
import {Register} from '../features/register';
import {Profile} from '../features/profile';
import {LOGIN, REGISTER, PROFILE} from '../routes';

const Stack = createStackNavigator();

export const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={REGISTER}
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
