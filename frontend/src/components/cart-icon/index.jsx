import {connect} from 'react-redux';

import {Badge} from '../badge';
import {styles} from './styles';

const BaseCartIcon = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        <Badge
          style={styles.cartIcon}
          label={props.cartItems.length}
        />
      ) : (
        <Badge
          style={styles.cartIcon}
          label='0'
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {cartItems: cartItems};
}

export const CartIcon = connect(mapStateToProps)(BaseCartIcon);
