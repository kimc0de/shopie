import {createStackNavigator} from '@react-navigation/stack';

import {Products} from '../features/products';
import {ProductDetails} from '../features/product-details';
import {HOME, PRODUCT_DETAILS} from '../routes';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={Products}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PRODUCT_DETAILS}
        component={ProductDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
