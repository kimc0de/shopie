import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import {products} from '../../../assets/data/products';
import {SearchBar} from '../../components/search-input';
import {ProductSearch} from '../../components/search-product';

import {ProductList} from './product-list';
import {styles} from './styles';

const renderItems = ({item}) => {
  return (
    <ProductList
      key={item.id}
      item={item}
    />
  );
};

const keyExtractor = (item) => item.name;

export const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setProductsList(products);
  }, []);

  return (
    <View>
      <View>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          focus={focused}
          setFocused={setFocused}
        />
      </View>
      {
        focused ? (
            <ProductSearch
              searchPhrase={searchPhrase}
              data={productsList}
              setFocused={setFocused}
            />
        ) : (
          <View style={styles.productContainer_wrapper}>
            <FlatList
              data={productsList}
              renderItem={renderItems}
              keyExtractor={keyExtractor}
              numColumns={2}
            />
          </View>
        )
      }
    </View>
  );
};
