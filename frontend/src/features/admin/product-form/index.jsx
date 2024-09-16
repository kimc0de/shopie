import {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {Item, Picker} from 'native-base';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import mime from "mime";

import {Form} from '../../../components/form';
import {Button} from '../../../components/button';
import * as enums from '../../../components/button/enums';
import {DEFAULT_IMAGE} from '../../../components/image/constants';
import {Input} from '../../../components/input';
import {TOAST_OFFSET} from '../../../components/toast/constants';
import {createProduct, updateProduct, getAllCategories} from '../../../api';
import {ADMIN_PRODUCTS} from '../../../routes';

import {styles} from './styles';

export const ProductForm = (props) => {
  const [pickerValue, setPickerValue] = useState();
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState('');
  const [mainImage, setMainImage] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState(0);
  const [token, setToken] = useState('');
  const [countInStock, setCountInStock] = useState();
  const [isFeatured, setIsFeatured] = useState(false);
  const [richDescription, setRichDescription] = useState();
  const [item, setItem] = useState({});

  useEffect(() => {
    if(!props.route.params) {
      setItem(null);
    } else {
      const item = props.route.params.item;

      console.log(item);
      setItem(item);
      setBrand(item.brand);
      setName(item.name);
      setRating(item.rating.toString() || 0);
      setPrice(item.price.toString());
      setDescription(item.description);
      setMainImage(item.image);
      setImage(item.image);
      setIsFeatured(item.isFeatured);
      setCategory(item.category._id);
      setRichDescription(item.richDescription);
      setCountInStock(item.countInStock.toString());
    }

    AsyncStorage.getItem("jwt")
      .then((token) => {
        setToken(token)
      })
      .catch((error) => {
        Toast.show({
          topOffset: TOAST_OFFSET,
          type: 'error',
          text1: 'Unauthorized User.',
          text2: error.message,
        });
      })
  }, []);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res.data);
    }).catch((error) => {
      Toast.show({
        topOffset: TOAST_OFFSET,
        type: 'error',
        text1: 'Error fetching categories.',
        text2: error.message,
      });
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setMainImage(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  }

  const addProduct = async () => {
    if (
      name === "" ||
      brand === "" ||
      price === "" ||
      description === "" ||
      category === "" ||
      countInStock === ""
    ) {
      Toast.show({
        topOffset: TOAST_OFFSET,
        type: 'error',
        text1: 'Please fill in all fields',
      });
    }

    //create form data object to send to the server
    let formData = new FormData();
    const newImageUri = "file:///" + image.split("file:/").join("");

    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop()
    });
    formData.append('name', name);
    formData.append('brand', brand);
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('countInStock', countInStock);
    formData.append('isFeatured', isFeatured);
    formData.append('richDescription', richDescription);

    if (item !== null) {
      updateProduct(formData, token, item._id)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Toast.show({
              topOffset: TOAST_OFFSET,
              type: 'success',
              text1: 'Product successfully updated!',
            });
            setTimeout(() => {
              props.navigation.navigate(ADMIN_PRODUCTS);
            }, 500);
          }
        })
        .catch((err) => {
          Toast.show({
            topOffset: TOAST_OFFSET,
            type: 'error',
            text1: 'Something went wrong.',
            text2: err.message,
          });
        });
    } else {
      createProduct(formData, token).then((res) => {
        if (res.status === 200 || res.status === 201) {
          Toast.show({
            topOffset: TOAST_OFFSET,
            type: 'success',
            text1: 'Product successfully added!',
          });
          setTimeout(() => {
            props.navigation.navigate(ADMIN_PRODUCTS);
          }, 500);
        }
      }).catch((err) => {
        Toast.show({
          topOffset: TOAST_OFFSET,
          type: 'error',
          text1: 'Something went wrong.',
          text2: err.message,
        });
      });
    }
  }

  return (
    <Form>
      <View style={styles.productForm_imageContainer}>
        <Image style={styles.productForm_image} source={{uri: mainImage ? mainImage : DEFAULT_IMAGE}}/>
        <Button
          title='Upload'
          size={enums.SMALL}
          style={styles.productForm_imageButton}
          onPress={pickImage}
        >
          <Feather name='camera' size={20} color='white'/>
        </Button>
      </View>
      <View style={styles.productForm_label}>
        <Text>Brand</Text>
      </View>
      <Input
        name='brand'
        id='brand'
        value={brand}
        onChangeText={(text) => setBrand(text)}
        placeholder='Brand'
      />
      <View style={styles.productForm_label}>
        <Text>Name</Text>
      </View>
      <Input
        name='name'
        id='name'
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Name'
      />
      <View style={styles.productForm_label}>
        <Text>Price</Text>
      </View>
      <Input
        name='price'
        id='price'
        value={price}
        onChangeText={(text) => setPrice(text)}
        placeholder='Price'
      />
      <View style={styles.productForm_label}>
        <Text>Count In Stock</Text>
      </View>
      <Input
        name='countInStock'
        id='countInStock'
        value={countInStock}
        onChangeText={(text) => setCountInStock(text)}
        placeholder='Count In Stock'
      />
      <View style={styles.productForm_label}>
        <Text>Description</Text>
      </View>
      <Input
        name='description'
        id='description'
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder='Description'
      />
      <Item style={styles.productForm_categoryPicker_container}>
        <Text>Category</Text>
        <Picker
          mode='dropdown'
          iosIcon={<Octicons name="triangle-down" size={24} color="black" />}
          androidIcon={<Octicons name="triangle-down" size={24} color="black" />}
          style={{width: undefined}}
          placeholder='Select category'
          placeholderStyle={{color: '##007aff'}}
          selectedValue={pickerValue || category}
          onValueChange={(value) => [setPickerValue(value), setCategory(value)]}
          >
          {categories.map((category) => (
            <Picker.Item key={category.id} label={category.name} value={category.id}/>
          ))}
        </Picker>
      </Item>
      <View>
        <Button
          title='Confirm'
          onPress={() => addProduct()}
          type={enums.PRIMARY}
          size={enums.LARGE}
          fullWidth
        />
      </View>
    </Form>
  )
}
