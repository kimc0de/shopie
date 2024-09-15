import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

import * as actions from '../../features/cart/actions';
import {Button} from '../../components/button';
import {CartItem} from '../../components/cart-item';
import {CART} from '../../routes';
import {styles} from './styles';

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  }
}

const BaseConfirm = (props) => {
  const confirm = props.route.params;
  const order = confirm?.order?.order;
  const items = confirm?.order?.order?.orderItems;

  const confirmOrder = () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate(CART);
    }, 500)
  }

  return (
    <ScrollView contentContainerStyle={styles.confirm_container}>
        <View style={styles.confirm_body}>
          <Text style={styles.confirm_title}>Confirm Order</Text>
          {confirm ? (
            <View>
              <Text style={styles.confirm_info_title}>Shipping to:</Text>
              <View>
                <Text>Address: {order.shippingAddress1}</Text>
                <Text>Additional address: {order.shippingAddress2}</Text>
                <Text>City: {order.city}</Text>
                <Text>Zip code: {order.zip}</Text>
                <Text>Country: {order.country}</Text>
              </View>
              <Text style={styles.confirm_info_title}>Items:</Text>
              {items.map((item, index) => {
                return (
                  <CartItem key={`${item.product.name}-${index}`} product={item.product}/>
                )
              })}
            </View>
          ) : null}
        </View>
        <View style={styles.confirm_placeOrderButton}>
          <Button title='Place order' onPress={() => confirmOrder()} />
        </View>
    </ScrollView>
  );
}

export const Confirm = connect(null, mapDispatchToProps)(BaseConfirm);
