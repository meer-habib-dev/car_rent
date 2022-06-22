import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors } from "../../utils/config/colors";
import Icon from "../_car/Icon";

const AppTitle = ({ title, subTitle, more, image }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      {more && (
        <TouchableOpacity style={styles.moreContainer}>
          <AppText style={styles.text}>{more}</AppText>
          <Icon
            name={"menu-right"}
            IconColor={colors.theme}
            iconSize={30}
            mr={0}
          />
        </TouchableOpacity>
      )}
      {image && <Image source={image} style={{ width: 60, height: 60 }} />}
    </View>
  );
};

export default AppTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.theme,
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    color: colors.theme,
    fontSize: 16,
  },
  moreContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingLeft: 20,
    borderRadius: 50,
  },
});
