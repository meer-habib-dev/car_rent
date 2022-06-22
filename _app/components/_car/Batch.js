import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/config/colors";
import AppText from "../_common/AppText";

const Batch = ({ title }) => {
  return (
    <View style={styles.batch}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};

export default Batch;

const styles = StyleSheet.create({
  batch: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderColor: colors.theme,
  },
  text: {
    color: colors.theme,
    fontSize: 10,
  },
});
