import Icon from '@expo/vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

import {HomeNavigator} from '../navigators/home-navigator';
import {CartNavigator} from '../navigators/cart-navigator';
import {CartIcon} from '../components/cart-icon';

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
            <View>
              <Icon name="shopping-cart" color={color} size={26} />
              <CartIcon />
            </View>
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
