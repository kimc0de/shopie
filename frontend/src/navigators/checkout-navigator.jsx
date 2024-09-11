import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Checkout} from '../features/checkout';
import {Confirm} from '../features/confirm';
import {Payment} from '../features/payment';
import {CONFIRM, PAYMENT, SHIPPING} from '../routes';

const Tab = createMaterialTopTabNavigator();

export const CheckoutNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SHIPPING} component={Checkout} />
      <Tab.Screen name={PAYMENT} component={Payment} />
      <Tab.Screen name={CONFIRM} component={Confirm} />
    </Tab.Navigator>
  );
}
