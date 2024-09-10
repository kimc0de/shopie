import {createStackNavigator} from '@react-navigation/stack';

import {Cart} from '../features/cart';
import {CheckoutNavigator} from '../navigators/checkout-navigator';
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
        component={CheckoutNavigator}
        options={{title: 'Checkout'}}
      />
    </Stack.Navigator>
  );
}
