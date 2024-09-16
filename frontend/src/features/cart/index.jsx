import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from '@expo/vector-icons/FontAwesome';
import {useContext} from 'react';

import {CartItem} from '../../components/cart-item';
import {CHECKOUT} from '../../routes';
import {Button} from '../../components/button';
import * as enums from '../../components/button/enums';
import {AuthGlobal} from '../../features/auth/global';
import {TOAST_OFFSET} from '../../components/toast/constants';

import {styles} from './styles';
import * as actions from './actions';
import Toast from 'react-native-toast-message';

const mapStateToProps = (state) => {
  const {cartItems} = state;

  return {cartItems: cartItems};
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item))
  }
}

const BaseCart = (props) => {
  const context = useContext(AuthGlobal);

  const total = props.cartItems.reduce((acc, item) => {
    return acc + item.product.price;
  }, 0);

  return (
    <>
      {props.cartItems.length === 0 ?
        (
          <View style={styles.cart_empty}>
            <Text>Your cart is empty.</Text>
            <Text>Add products to your cart to get started!</Text>
          </View>
        ) : (
          <View style={styles.cart_container}>
            <SwipeListView
              data={props.cartItems}
              renderItem={(data) => (
                <CartItem
                  product={data.item.product}
                />
              )}
              renderHiddenItem={(data) => (
                <TouchableOpacity
                  style={styles.hiddenButton}
                  activeOpacity={0.5}
                  onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name={'trash'} size={30} color={'white'}/>
                </TouchableOpacity>
              )}
              disableRightSwipe={true}
              previewOpenDelay={3000}
              friction={1000}
              tension={40}
              leftOpenValue={75}
              stopLeftSwipe={75}
              rightOpenValue={-75}
            />
          </View>
        )}
        <View style={styles.cart_bottomContainer}>
          <View>
            <Button title='Clear' type={enums.SECONDARY} onPress={() => props.clearCart()}/>
          </View>
          <View style={styles.cart_bottomRightContainer}>
            <Text style={styles.cart_totalPrice}>${total}</Text>
            {context.stateUser.isAuthenticated ? (
              <Button title='Checkout' onPress={() => props.navigation.navigate(CHECKOUT)}/>
            ) : (
              <Button title='Checkout' type={enums.DISABLED} onPress={() => {
                Toast.show({
                  topOffset: TOAST_OFFSET,
                  type: 'error',
                  text1: 'Please login to checkout.',
                });
              }}/>
            )}
          </View>
        </View>
    </>
  );
}

export const Cart = connect(mapStateToProps, mapDispatchToProps)(BaseCart);
