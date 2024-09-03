import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image
} from "react-native";

import {styles} from "./styles";

const Item = ({ name, details, image }) => (
  <View style={styles.productSearch_item}>
    <Image
      style={styles.productSearch_image}
      resizeMode='contain'
      source={{uri: image ? image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
    />
    <View>
      <Text style={styles.productSearch_title}>{name}</Text>
      <Text style={styles.productSearch_details}>{details}</Text>
    </View>
  </View>
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
