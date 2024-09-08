import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

import {products} from '../../../assets/data/products';
import {categories} from '../../../assets/data/categories';
import {SearchBar} from '../../components/search-input';
import {ProductSearch} from '../../components/search-product';
import {Highlights} from '../../components/highlight';
import {ProductCard} from '../../components/product-card';
import {Category} from '../../components/category';
import {PRODUCT_DETAILS} from '../../routes';

import {styles} from './styles';

export const Products = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  useEffect(() => {
    setProductsList(products);
    setCategoriesList(categories);
    setActive(-1);
    setInitialState(products);
    setProductsCtg(products);
  }, []);

  const changeCategory = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(-1)]
        : [
          setProductsCtg(
            products.filter((i) => i.category.$oid === ctg),
            setActive(true)
          ),
        ];
    }
  };

  const navigateToProductDetails = (item) => {
    props.navigation.navigate(PRODUCT_DETAILS, {item});
  };

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
            navigation={props.navigation}
            searchPhrase={searchPhrase}
            data={productsList}
            setFocused={setFocused}
          />
        ) : (
          <ScrollView>
            <View style={styles.products_section}>
              <Highlights />
              <Category
                categories={categoriesList}
                changeCategory={changeCategory}
                productCategorie={active}
                active={active}
                setActive={setActive}
              />
              {
                productsCtg.length > 0
                  ? (
                    <View style={styles.productsList_container}>
                      {productsCtg.map((item) => {
                        return (
                          <TouchableOpacity
                            key={item._id.$oid}
                            onPress={() => navigateToProductDetails(item)}
                          >
                            <View style={styles.productCard_wrapper}>
                              <ProductCard {...item} />
                            </View>
                          </TouchableOpacity>
                        )
                      })}
                    </View>
                  )
                  : (
                    <View style={styles.products_notfound}>
                      <Text>No products found</Text>
                    </View>
                  )
              }
            </View>
          </ScrollView>
        )
      }
    </View>
  );
};
