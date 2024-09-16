import {useEffect, useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Picker} from 'native-base';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Octicons} from '@expo/vector-icons';

import {Button} from '../../components/button';
import {
  PENDING,
  SHIPPED,
  DELIVERED,
} from './enums';
import {TOAST_OFFSET} from '../../components/toast/constants';
import {ADMIN_PRODUCTS} from '../../routes';
import {styles} from './styles';
import {updateOrder} from '../../api';

const orderStatuses = [
  { name: PENDING},
  { name: SHIPPED},
  { name: DELIVERED},
];

export const OrderCard = (props) => {
  const [statusChange, setStatusChange] = useState();
  const [statusText, setStatusText] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if (props.editMode) {
      AsyncStorage.getItem("jwt")
        .then((token) => {
          setToken(token);
        })
        .catch(() => {
          Toast.show({
            topOffset: TOAST_OFFSET,
            type: 'error',
            text1: 'Something went wrong.',
            text2: 'Please try again.',
          });
        });
    }

    if (props.status === PENDING) {
      setStatusText(PENDING);
      // setCardColor("#E74C3C");
    } else if (props.status === SHIPPED) {
      setStatusText(SHIPPED);
      // setCardColor("#F1C40F");
    } else {
      setStatusText(DELIVERED);
      // setCardColor("#2ECC71");
    }
  }, []);

  const updateOrderCard = () => {
    const order = {
      city: props.city,
      country: props.country,
      dateOrdered: props.dateOrdered,
      id: props.id,
      orderItems: props.orderItems,
      phone: props.phone,
      shippingAddress1: props.shippingAddress1,
      shippingAddress2: props.shippingAddress2,
      status: statusChange,
      totalPrice: props.totalPrice,
      user: props.user,
      zip: props.zip,
    };

    updateOrder(order, props.id, token).then((res) => {
        if (res.status === 200 || res.status === 201) {
          Toast.show({
            topOffset: TOAST_OFFSET,
            type: "success",
            text1: "Order Edited.",
          });
          setTimeout(() => {
            props.navigation.navigate(ADMIN_PRODUCTS); // @TODO: reload page would be better
          }, 500);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: TOAST_OFFSET,
          type: "error",
          text1: "Something went wrong.",
          text2: error.message,
        });
      });
  };

  return (
    <View style={styles.orderCard_container}>
      <View style={styles.orderCard_id_container}>
        <Text>Order Number: #{props.id}</Text>
      </View>
      <View style={styles.orderCard_info_container}>
        <Text>
          Status: {statusText}
        </Text>
        <Text>
          Address: {props.shippingAddress1} {props.shippingAddress2}
        </Text>
        <Text>City: {props.city}</Text>
        <Text>Country: {props.country}</Text>
        <Text>Date Ordered: {props.dateOrdered.split("T")[0]}</Text>
        <View style={styles.orderCard_priceContainer}>
          <Text>Price: </Text>
          <Text style={styles.orderCard_price}>$ {props.totalPrice}</Text>
        </View>
        {props.editMode ? (
          <View>
            <Picker
              mode="dropdown"
              iosIcon={<Octicons size={20} color='black' name="triangle-down" />}
              selectedValue={statusChange || props.status}
              placeholder="Change Status"
              onValueChange={(e) => setStatusChange(e)}
            >
              {orderStatuses.map((c, index) => {
                return (
                  <Picker.Item key={index} label={c.name} value={c.name} />
                );
              })}
            </Picker>
            <Button title="Update" onPress={() => updateOrderCard()} />
          </View>
        ) : null}
      </View>
    </View>
  )
}
