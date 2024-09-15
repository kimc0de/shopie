import {
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';

import {deleteProductById, getAllProducts} from '../../../api';
import {SearchBar} from '../../../components/search-input';
import {ListItem} from '../../../components/list-item';
import {ListHeader} from '../../../components/list-header';
import {Button} from '../../../components/button';
import * as enums from '../../../components/button/enums';
import {ADMIN_CATEGORIES, ADMIN_PRODUCT_FORM, ADMIN_ORDERS} from '../../../routes';

import {styles} from './styles';

const keyExtractor = (item) => item.id;

export const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productFilter, setProductFilter] = useState([]);
  const [token, setToken] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [focused, setFocused] = useState(false);

  useFocusEffect(
    useCallback(
      () => {
        setFocused(false);

        AsyncStorage.getItem('jwt')
          .then((res) => {
            setToken(res);
          })
          .catch((err) => console.error(err));

        getAllProducts().then((res) => {
          setProducts(res.data);
          setProductFilter(res.data);
          setLoading(false);
        });
      }
    ,[])
  );

  const searchProduct = (text) => {
    setSearchPhrase(text);
    if (text === '') {
      setProductFilter(products);
    } else {
      setProductFilter(products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      ));
    }
  }

  const deleteProduct = (id) => {
    deleteProductById(id, token)
      .then(() => {
      const products = productFilter.filter((item) => item.id !== id);
      setProductFilter(products);
      })
      .catch((err) => console.error(err));
  }

  return (
    <View style={styles.admin_products_container}>
      <View style={styles.admin_products_buttonGroup}>
        <Button
          size={enums.SMALL}
          title='Orders'
          onPress={() => props.navigation.navigate(ADMIN_ORDERS)}
        >
          <Feather name='plus' size={16} color='white' />
        </Button>
        <Button
          size={enums.SMALL}
          title='Categories'
          onPress={() => props.navigation.navigate(ADMIN_CATEGORIES)}
        >
          <Feather name='plus' size={16} color='white' />
        </Button>
        <Button
          size={enums.SMALL}
          title='Products'
          onPress={() => props.navigation.navigate(ADMIN_PRODUCT_FORM)}
        >
          <Feather name='plus' size={16} color='white' />
        </Button>
      </View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={searchProduct}
        focused={focused}
        setFocused={setFocused}
      />
      {loading ?
        <ActivityIndicator
          style={styles.admin_products_spinner}
          size='large'
          color='black'
        /> : (
        <FlatList
          data={productFilter}
          ListHeaderComponent={ListHeader}
          renderItem={({item, index}) =>
            (<ListItem
              {...item}
              navigation={props.navigation}
              index={index}
              deleteProduct={deleteProduct}
            />)}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};
