import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity style={[styles.Button]} onPress={onPress}>
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: colors.theme,
    borderRadius: 15,
    marginVertical: 10,
  },
  Text: {
    fontSize: 18,
    color: "#fff",
  },
});
