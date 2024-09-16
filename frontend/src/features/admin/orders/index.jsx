import {
  View,
  FlatList, Text,
} from 'react-native';
import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {getAllOrders} from '../../../api';
import {TOAST_OFFSET} from '../../../components/toast/constants';
import {OrderCard} from '../../../components/order-card';

import {styles} from './styles';

export const Orders = (props) => {
  const [orderList, setOrderList] = useState([]);

  useFocusEffect((
    useCallback(
      () => {
        getAllOrders().then((res) => {
          setOrderList(res.data);
        }).catch((err) => {
          Toast.show({
            topOffset: TOAST_OFFSET,
            type: 'error',
            text1: 'Something went wrong.',
            text2: err.message,
          });
        });
      },
      [],
    )
  ));

  return (
    <View style={styles.orders_container}>
      <FlatList
        data={orderList}
        renderItem={({item}) => (
          <OrderCard navigation={props.navigation} {...item} editMode={true}/>
        )}
      />
    </View>
  )
}
