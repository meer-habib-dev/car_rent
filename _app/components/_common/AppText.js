import { StyleSheet, Text, View } from "react-native";
import React from "react";
const AppText = ({ children, style, ...otherProps }) => {
  return (
    <>
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    </>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "#0c0c0c",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
