import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";

import {styles} from "./styles";
import {PRODUCT_DETAILS} from '../../routes';

const Item = ({ name, details, image }) => (
  <TouchableOpacity
    style={styles.productSearch_item}
    onPress={() => props.navigation.navigate(PRODUCT_DETAILS, {item})}
  >
    <Image
      style={styles.productSearch_image}
      resizeMode='contain'
      source={{uri: image ? image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
    />
    <View>
      <Text style={styles.productSearch_title}>{name}</Text>
      <Text style={styles.productSearch_details}>{details}</Text>
    </View>
  </TouchableOpacity >
);

const keyExtractor = (item) => item.name;

export const ProductSearch = ({ searchPhrase, setFocused, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.description} image={item.image}/>;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.description} image={item.image}/>;
    }
    // filter of the description
    if (item.description.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.description} image={item.image}/>;
    }
  };

  return (
    <SafeAreaView>
      <View
        style={styles.productSearch_container}
        onStartShouldSetResponder={() => {
          setFocused(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
};
