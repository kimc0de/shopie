import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {products} from '../../../assets/data/products';
import {categories} from '../../../assets/data/categories';
import {SearchBar} from '../../components/search-input';
import {ProductSearch} from '../../components/search-product';
import {Highlights} from '../../components/highlight';
import {ProductCard} from '../../components/product-card';
import {Category} from '../../components/category';

import {styles} from './styles';

const renderItems = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.productCard_wrapper}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

const keyExtractor = (item) => item.name;

export const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProductsList(products);
    setCategoriesList(categories);
    setActive(-1);
    setInitialState(products);
  }, []);

  return (
    <View style={styles.products}>
      <View>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          focused={focused}
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
          <View style={styles.products_container}>
            <Highlights />

            {/*<View>*/}
            {/*  <Category />*/}
            {/*</View>*/}
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
