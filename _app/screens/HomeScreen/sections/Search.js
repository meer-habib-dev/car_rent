import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppText from "../../../components/_common/AppText";
import Icon from "../../../components/_car/Icon";
import { colors } from "../../../utils/config/colors";

const Search = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Search Your Dream Super Car To Ride</AppText>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="shield-search" iconSize={30} />
          <TextInput placeholder="Search Your Dream Car" />
        </View>
        <TouchableOpacity style={styles.filter}>
          <Icon name="archive-search-outline" IconColor="white" iconSize={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  icon: {
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.lightText,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    flex: 1,
    marginRight: 10,
  },
  filter: {
    backgroundColor: colors.theme,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
