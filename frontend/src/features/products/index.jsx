import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import {products} from '../../../assets/data/products';
import {SearchBar} from '../../components/search-input';

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
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setProductsList(products);
  }, []);

  return (
      <View>
        <View>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>
        <View style={styles.productContainer_wrapper}>
          <FlatList
            data={productsList}
            renderItem={renderItems}
            keyExtractor={keyExtractor}
            numColumns={2}
          />
        </View>
      </View>
  )
}
