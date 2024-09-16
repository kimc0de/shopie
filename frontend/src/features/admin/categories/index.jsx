import {
  View,
  FlatList,
  Text,
} from 'react-native';
import {useState, useEffect} from 'react';
import Toast from 'react-native-toast-message';

import {Input} from '../../../components/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from '../../../components/button';
import * as enums from '../../../components/button/enums';
import {getAllCategories} from '../../../api';
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

  return (
    <View style={styles.categories_container}>
      <View style={styles.categories_list}>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryItem item={item}/>
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
          <Button size={enums.SMALL} title="Submit" />
        </View>
      </View>
    </View>
  );
};
