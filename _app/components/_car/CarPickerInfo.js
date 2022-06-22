import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "../_common/AppText";
import { colors } from "../../utils/config/colors";

const CarPickerInfo = ({
  title,
  subTitle,
  name,
  iconSize,
  bg,
  sm,
  IconColor,
  index,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg && colors.secondary,
          flex: 1,
        },
      ]}
    >
      <View
        style={[
          styles.icon,
          { borderRightWidth: sm && 1, borderColor: sm && "gray" },
        ]}
      >
        <Icon name={name} iconSize={iconSize} IconColor={IconColor} />
      </View>
      <View style={styles.textContainer}>
        <AppText
          style={{ color: sm ? "white" : colors.lightText, fontSize: 13 }}
        >
          {title}
        </AppText>
        <AppText
          style={{
            fontWeight: "bold",
            color: sm ? "white" : colors.lightText,
            fontSize: 13,
          }}
        >
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default CarPickerInfo;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  icon: {
    alignSelf: "center",
    // width: 40,
    // paddingHorizontal: 0,
    justifyContent: "center",
  },
  textContainer: {
    flexGrow: 1,
    paddingLeft: 10,
  },
});
