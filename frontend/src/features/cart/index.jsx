import {
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import {CartItem} from '../../components/cart-item';

import {styles} from './styles';

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {cartItems: cartItems};
}

const BaseCart = (props) => {
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
            {
              props.cartItems.map((item) => {
                return (
                  <CartItem
                    price={item.product.price}
                    image={item.product.image}
                    name={item.product.name}
                  />
                )
              })
            }
          </View>
        )
        }
    </>
  );
}

export const Cart = connect(mapStateToProps)(BaseCart);
