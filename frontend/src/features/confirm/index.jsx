import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import * as actions from '../../features/cart/actions';
import {createOrder} from '../../api/';
import {Button} from '../../components/button';
import {CartItem} from '../../components/cart-item';
import {CART} from '../../routes';
import {styles} from './styles';
import {TOAST_OFFSET} from '../../components/toast/constants';

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  }
}
const mapStateToProps = (state) => {
  const {cartItems} = state;

  return {cartItems: cartItems};
}

const BaseConfirm = (props) => {
  const confirm = props.route.params;
  const finalOrder = confirm?.order?.order;
  const items = confirm?.order?.order?.orderItems;

  const confirmOrder = () => {
    createOrder(finalOrder).then((res) => {
      if (res.status === 200 || res.status === 201) {
        Toast.show({
          topOffset: TOAST_OFFSET,
          type: "success",
          text1: "Order Completed",
          text2: "",
        });

        setTimeout(() => {
          props.clearCart();
          props.navigation.navigate(CART);
        }, 500);
      }
    }).catch((error) => {
      Toast.show({
        topOffset: TOAST_OFFSET,
        type: 'error',
        text1: 'Something went wrong.',
        text2: error.message,
      });
    });

  }
  const total = props.cartItems.reduce((acc, item) => {
    return acc + item.product.price;
  }, 0);

  return (
    <ScrollView contentContainerStyle={styles.confirm_container}>
        <View style={styles.confirm_body}>
          <Text style={styles.confirm_title}>Confirm Order</Text>
          {confirm ? (
            <View>
              <Text style={styles.confirm_info_title}>Shipping to:</Text>
              <View>
                <Text>Address: {finalOrder.shippingAddress1}</Text>
                <Text>Additional address: {finalOrder.shippingAddress2}</Text>
                <Text>City: {finalOrder.city}</Text>
                <Text>Zip code: {finalOrder.zip}</Text>
                <Text>Country: {finalOrder.country}</Text>
              </View>
              <Text style={styles.confirm_info_title}>Items:</Text>
              {items.map((item, index) => {
                return (
                  <CartItem key={`${item.product.name}-${index}`} product={item.product}/>
                )
              })}
              <Text style={styles.confirm_info_title}>Total: ${total}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.confirm_placeOrderButton}>
          <Button title='Place order' onPress={() => confirmOrder()} />
        </View>
    </ScrollView>
  );
}

export const Confirm = connect(mapStateToProps, mapDispatchToProps)(BaseConfirm);
