import {
  View,
  Image,
  Text,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import {DEFAULT_IMAGE} from '../../components/product-card/constants';
import * as actions from '../../features/cart/actions';
import {TOAST_OFFSET} from '../../components/toast/constants';

import {styles} from './styles';

const BaseProductCard = (props) => {
  const {
    name,
    price,
    image,
    countInStock,
  } = props;

  const productName = name.length > 15 ? `${name.substring(0, 15 - 3)}...` : name;

  return (
    <View style={styles.productCard}>
      <Image
        style={styles.productCard_image}
        resizeMode='contain'
        source={{uri: image ? image: DEFAULT_IMAGE}}
      />
      <View style={styles.productCard_info}/>
        <Text style={styles.productCard_title}>
          {productName}
        </Text>
        <Text style={styles.productCard_price}>${price}</Text>
        {
          countInStock > 0 ? (
            <View style={styles.productCard_add}>
              <Button
                title='Add'
                color='blue'
                onPress={() => {
                  props.addItemToCart(props);
                  Toast.show({
                    topOffset: TOAST_OFFSET,
                    type: 'success',
                    text1: `${name} added to cart`,
                    text2: 'View cart to checkout',
                  });
                }}
              />
            </View>
          ) : <Text style={styles.productCard_unavailable}>Currently Unavailable</Text>
        }
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(actions.addToCart({quantity: 1, product})),
  };
}

export const ProductCard = connect(null, mapDispatchToProps)(BaseProductCard);
