import {
  TouchableOpacity,
  View
} from 'react-native';
import {ProductCard} from './product-card';
import {styles} from './styles';

export const ProductList = (props) => {
  const {item} = props;

  return (
    <TouchableOpacity>
      <View style={styles.productList_wrapper}>
       <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  )
}
