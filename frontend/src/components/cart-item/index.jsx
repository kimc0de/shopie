import {Image, Text, View} from 'react-native';

import {styles} from './styles';

export const CartItem = ({
  name,
  price,
  image,
}) => {
  return (
    <View
      style={styles.cartItem_container}
    >
      <Image
        style={styles.cartItem_image}
        resizeMode='contain'
        source={{uri: image ? image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
      />
      <View style={styles.cartItem_content}>
        <Text style={styles.cartItem_name}>{name}</Text>
        <Text style={styles.cartItem_price}>${price}</Text>
      </View>
    </View >
  )
}
