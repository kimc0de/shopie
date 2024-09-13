import React, {useState, useCallback} from 'react';
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {SearchBar} from '../../components/search-input';
import {ProductSearch} from '../../components/search-product';
import {Highlights} from '../../components/highlight';
import {ProductCard} from '../../components/product-card';
import {Category} from '../../components/category';
import {PRODUCT_DETAILS} from '../../routes';
import {getAllProducts, getAllCategories} from '../../api';

import {styles} from './styles';

export const Products = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect((
    useCallback(
      () => {
        setFocused(false);
        setActive(-1);

        getAllCategories().then((res) => {
          setCategoriesList(res.data);
        }).catch((err) => {
          console.log(err);
        });

        getAllProducts().then((res) => {
          setProductsList(res.data);
          setInitialState(res.data);
          setProductsCtg(res.data);
          setInitialState(res.data);
          setIsLoading(false);
        }).catch((err) => {
          console.log(err);
        });
      },
      [],)
  ))

  const changeCategory = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(-1)]
        : [
          setProductsCtg(
            productsList.filter((i) => i.category._id === ctg),
            setActive(true)
          ),
        ];
    }
  };

  const navigateToProductDetails = (item) => {
    props.navigation.navigate(PRODUCT_DETAILS, {item});
  };

  return (
    <>
      {!isLoading ? (
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
                            key={`${item.name}-${item._id}`}
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
        ) : (
          <View style={styles.products_loadingContainer}>
            <ActivityIndicator size="large" color="black"/>
          </View>
        )
      }
    </>
  );
};
