import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor,
  IconColor = "black",
  iconSize,
  style,
  mr = 10,
}) => {
  return (
    <View
      style={[
        styles.iconContainer,
        style,
        {
          width: size,
          height: size,
          backgroundColor,
          borderRadius: size / 4,
          marginRight: mr,
        },
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={IconColor}
        size={iconSize ?? size * 0.5}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
