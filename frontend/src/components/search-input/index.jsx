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

export const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.searchBar_container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unClicked
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
            setClicked(true);
          }}
        />
        {clicked && (
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
      {clicked && (
        <View style={styles.searchBar_cancelButton}>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
