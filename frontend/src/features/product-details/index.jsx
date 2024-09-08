import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {connect} from 'react-redux';

import {DEFAULT_IMAGE} from '../../components/product-card/constants';
import * as actions from '../../features/cart/actions';

import {styles} from './styles';

const BaseProductDetails = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState(null);

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
      </ScrollView>
      <View style={styles.productDetails_bottomContainer}>
          <Text style={styles.productDetails_itemPrice}>
            ${item.price}
          </Text>
          <Button
            title='Add'
            color={'blue'}
            onPress={() => {
              props.addItemToCart(item);
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
