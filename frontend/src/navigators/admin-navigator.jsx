import {createStackNavigator} from '@react-navigation/stack';

import {Orders} from '../features/admin/orders';
import {Products} from '../features/admin/products';
import {Categories} from '../features/admin/categories';
import {ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_CATEGORIES} from '../routes';

const Stack = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ADMIN_PRODUCTS}
        component={Products}
        options={{title: 'Products'}}
      />
      <Stack.Screen
        name={ADMIN_CATEGORIES}
        component={Categories}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name={ADMIN_ORDERS}
        component={Orders}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
