import React from "react";
import {
  TextInput,
  View,
  Keyboard,
  Button
} from "react-native";
import {
  Feather,
  Entypo
} from "@expo/vector-icons";

import {styles} from "./styles";

export const SearchBar = ({focused, searchPhrase, setSearchPhrase, setFocused}) => {
  return (
    <View style={styles.searchBar_container}>
      <View
        style={
          focused
            ? styles.searchBar__focused
            : styles.searchBar__unFocused
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={styles.searchBar_searchIcon}
        />
        <TextInput
          style={styles.searchBar_input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setFocused(true);
          }}
        />
        {focused && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={styles.searchBar_closeIcon}
            onPress={() => {
              setSearchPhrase("")
            }}
          />
        )}
      </View>
      {focused && (
        <View style={styles.searchBar_cancelButton}>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setFocused(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
