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

const Item = (props) => {
  const {
    name,
    image,
    item,
    navigation,
  } = props;
  return (
    <TouchableOpacity
      style={styles.productSearch_item}
      onPress={() => navigation.navigate(PRODUCT_DETAILS, {item})}
    >
      <Image
        style={styles.productSearch_image}
        resizeMode='contain'
        source={{uri: image ? image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
      />
      <Text style={styles.productSearch_title}>{name}</Text>
    </TouchableOpacity >
  )
}


const keyExtractor = (item) => item.name;

export const ProductSearch = (props) => {
  const { searchPhrase, setFocused, data } = props;

  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.description} image={item.image} item={item} navigation={props.navigation}/>;
    }
    // filter of the name
    if (item.name?.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.description} image={item.image}  item={item} navigation={props.navigation}/>;
    }
    // filter of the description
    if (item.description?.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.description} image={item.image}  item={item} navigation={props.navigation}/>;
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
