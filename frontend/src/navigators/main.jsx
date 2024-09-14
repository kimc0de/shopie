import Icon from '@expo/vector-icons/FontAwesome';
import {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

import {HomeNavigator} from '../navigators/home-navigator';
import {CartNavigator} from '../navigators/cart-navigator';
import {UserNavigator} from '../navigators/user-navigator';
import {AdminNavigator} from '../navigators//admin-navigator';
import {CartIcon} from '../components/cart-icon';
import {AuthGlobal} from '../features/auth/global';

export const Tab = createBottomTabNavigator();

export const Main = () => {
  const context = useContext(AuthGlobal);

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
      {context.stateUser.user.isAdmin === true ? (
        <Tab.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="cog" color={color} size={26} />
            )
          }}
        />
      ) : null}

      <Tab.Screen
        name="User"
        component={UserNavigator}
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
