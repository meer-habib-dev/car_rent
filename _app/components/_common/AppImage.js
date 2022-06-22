import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/config/colors";

const AppImage = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 60,
          height: 60,
        }}
        source={image}
      />
    </View>
  );
};

export default AppImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 20,
    width: "31%",
    alignItems: "center",

    marginHorizontal: 4,
  },
});
