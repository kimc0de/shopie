import {createStackNavigator} from '@react-navigation/stack';

import {Orders} from '../features/admin/orders';
import {Products} from '../features/admin/products';
import {Categories} from '../features/admin/categories';
import {ProductForm} from '../features/admin/product-form';
import {ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_CATEGORIES, ADMIN_PRODUCT_FORM} from '../routes';

const Stack = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ADMIN_PRODUCTS}
        component={Products}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ADMIN_CATEGORIES}
        component={Categories}
      />
      <Stack.Screen
        name={ADMIN_ORDERS}
        component={Orders}
      />
      <Stack.Screen
        name={ADMIN_PRODUCT_FORM}
        component={ProductForm}
      />
    </Stack.Navigator>
  )
}
