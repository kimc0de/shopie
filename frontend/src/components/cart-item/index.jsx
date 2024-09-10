import {
  Image,
  Text,
  View,
} from 'react-native';

import {styles} from './styles';

export const CartItem = ({
  product
}) => {
  return (
    <View
      style={styles.cartItem_container}
    >
      <Image
        style={styles.cartItem_image}
        resizeMode='contain'
        source={{uri: product.image ? product.image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
      />
      <View style={styles.cartItem_content}>
        <Text style={styles.cartItem_name}>{product.name}</Text>
        <Text style={styles.cartItem_price}>${product.price}</Text>
      </View>
    </View >
  )
}
