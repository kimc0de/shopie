import {createStackNavigator} from '@react-navigation/stack';

import {Cart} from '../features/cart';
import {Checkout} from '../features/checkout';
import {CART, CHECKOUT} from '../routes';

const Stack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CART}
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CHECKOUT}
        component={Checkout}
        options={{title: 'Checkout'}}
      />
    </Stack.Navigator>
  );
}
