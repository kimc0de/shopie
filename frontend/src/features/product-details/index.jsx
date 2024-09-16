import {
  Image,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import {DEFAULT_IMAGE} from '../../components/image/constants';
import {Button} from '../../components/button';
import * as actions from '../../features/cart/actions';
import {TOAST_OFFSET} from '../../components/toast/constants';

import {styles} from './styles';

const BaseProductDetails = (props) => {
  const [item, _] = useState(props.route.params.item);

  return (
    <View style={styles.productDetails_container}>
      <ScrollView>
        <View style={styles.productDetails_imageContainer}>
          <Image
            style={styles.productDetails_image}
            source={{uri: item.image ? item.image : DEFAULT_IMAGE}}
            resizeMode='contain'
          />
        </View>
        <View style={styles.productDetails_content_container}>
          <Text style={styles.productDetails_itemName}>
            {item.name}
          </Text>
          <Text style={styles.productDetails_itemBrand} >
            {item.brand}
          </Text>
        </View>
        <View style={styles.productDetails_details}>
          <Text>
            Availability: {item.countInStock}
          </Text>
          <Text>
            Rating: {item.rating}/5
          </Text>
          <Text>
            {item.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.productDetails_bottomContainer}>
          <Text style={styles.productDetails_itemPrice}>
            ${item.price}
          </Text>
          <Button
            title='Add to cart'
            onPress={() => {
              props.addItemToCart(item);
              Toast.show({
                topOffset: TOAST_OFFSET,
                type: 'success',
                text1: `${item.name} added to cart`,
                text2: 'View cart to checkout',
              });
            }}
          />
      </View>
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(actions.addToCart({quantity: 1, product})),
  };
}

export const ProductDetails = connect(null, mapDispatchToProps)(BaseProductDetails);
