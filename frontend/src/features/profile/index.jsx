import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  useCallback,
  useContext,
  useState,
} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import {AuthGlobal} from '../../features/auth/global';
import {logout} from '../../features/auth/actions';
import {LOGIN} from '../../routes';
import {TOAST_OFFSET} from '../../components/toast/constants';
import {Button} from '../../components/button';
import * as enums from '../../components/button/enums';
import {getOrderByUser, getUserProfileById} from '../../api';
import {OrderCard} from '../../components/order-card';

import {styles} from './styles';

export const Profile = (props) => {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState();
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState('');

  useFocusEffect(
    useCallback(() => {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        props.navigation.navigate(LOGIN);
      }

      const userId = context.stateUser.user.userId;
      AsyncStorage.getItem("jwt")
        .then((token) => {
          setToken(token);
          getUserProfileById(userId, token)
            .then((user) => {
              setUserProfile(user.data);
            })
        })
        .catch((error) =>
          Toast.show({
            topOffset: TOAST_OFFSET,
            type: "error",
            text1: "Something went wrong.",
            text2: error.message
          })
        )

      getOrderByUser(userId, token).then((res) => {
        setOrders(res.data);
      }).catch((error) => {
        Toast.show({
          topOffset: TOAST_OFFSET,
          type: "error",
          text1: "Something went wrong.",
          text2: error.message
        })
      });
    }, [context.stateUser.isAuthenticated]))

  return (
    <View style={styles.profile_container}>
      <ScrollView contentContainerStyle={styles.profile_subContainer}>
        <Text style={styles.profile_name}>
          {userProfile ? userProfile.name : "" }
        </Text>
        <View style={styles.profile_infoContainer}>
          <Text style={styles.profile_info}>
            Email: {userProfile ? userProfile.email : ""}
          </Text>
          <Text style={styles.profile_info}>
            Phone: {userProfile ? userProfile.phone : ""}
          </Text>
        </View>

        <View style={styles.profile_order}>
          <Text style={styles.profile_orderTitle}>My Orders</Text>
          <View>
            {orders ? (
              orders.map((x) => {
                return <OrderCard key={x.id} {...x} />;
              })
            ) : (
              <View style={styles.profile_order}>
                <Text>You have no orders</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.profile_logoutBtn}>
          <Button
            type={enums.SECONDARY}
            title="Log Out"
            onPress={() => {
              AsyncStorage.removeItem("jwt");
              logout(context.dispatch);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
