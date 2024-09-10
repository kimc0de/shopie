import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Checkout} from '../features/checkout';
import {Confirm} from '../features/confirm';
import {Payment} from '../features/payment';

const Tab = createMaterialTopTabNavigator();

export const CheckoutNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
}
