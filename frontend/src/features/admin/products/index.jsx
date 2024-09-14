import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';
import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getAllProducts} from '../../../api';
import {SearchBar} from '../../../components/search-input';
import {ListItem} from '../../../components/list-item';
import {ListHeader} from '../../../components/list-header';

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

  return (
    <View style={styles.admin_products_container}>
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
          color='red'
        /> : (
        <FlatList
          data={productFilter}
          ListHeaderComponent={ListHeader}
          renderItem={({item, index}) =>
            (<ListItem
              {...item}
              navigation={props.navigation}
              index={index}
            />)}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};
