import {
  View,
  FlatList,
} from 'react-native';
import {useState, useEffect} from 'react';
import Toast from 'react-native-toast-message';

import {Input} from '../../../components/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from '../../../components/button';
import * as enums from '../../../components/button/enums';
import {addCategory, getAllCategories, deleteCategory} from '../../../api';
import {CategoryItem} from '../../../components/category-item';

import {styles} from './styles';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('jwt').then((token) => {
      setToken(token);
    }).catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Unauthorized access',
        text2: error.message,
      });
    });

    getAllCategories().then((response) => {
      setCategories(response.data);
    }).catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Error fetching categories',
        text2: error.message,
      });
    });
  }, []);

  const addCategoryItem = () => {
    const category = {
      name: categoryName,
    };

    addCategory(category, token).then((response) => {
      setCategories([...categories, response.data]);
      setCategoryName('');
    }).catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Error adding category.',
        text2: error.message,
      });
      });
  }

  const deleteCategoryItem = (id) => {
    deleteCategory(id, token).then(() => {
      setCategories(categories.filter((category) => category._id !== id));
    }).catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Error deleting category.',
        text2: error.message,
      });
    });
  }
  return (
    <View style={styles.categories_container}>
      <View style={styles.categories_list}>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryItem item={item} delete={deleteCategoryItem}/>
          )}
        />
      </View>
      <View style={styles.categories_bottomBar}>
        <View style={styles.categories_inputContainer}>
          <Input
            placeholder='Add Category Name'
            value={categoryName}
            onChangeText={setCategoryName}
          />
        </View>
        <View>
          <Button size={enums.SMALL} title="Submit" onPress={() => addCategoryItem()}/>
        </View>
      </View>
    </View>
  );
};
