import Icon from '@expo/vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from '../navigators/home-navigator';
import {CartNavigator} from '../navigators/cart-navigator';

export const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="cog" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="user" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
