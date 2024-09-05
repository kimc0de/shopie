import {
  View,
  Image,
  Text,
  Button,
} from 'react-native';

import {styles} from './styles';

export const ProductCard = (props) => {
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
        source={{uri: image ? image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
      />
      <View style={styles.productCard_info}/>
        <Text style={styles.productCard_title}>
          {productName}
        </Text>
        <Text style={styles.productCard_price}>${price}</Text>
        {
          countInStock > 0 ? (
            <View style={styles.productCard_add}>
              <Button title={'Add'} color={'blue'}/>
            </View>
          ) : <Text style={styles.productCard_unavailable}>Currently Unavailable</Text>
        }
    </View>
  )
}
