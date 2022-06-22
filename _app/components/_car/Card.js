import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import AppText from "../_common/AppText";
import { colors } from "../../utils/config/colors";

const Card = ({ image, title, subTitle, onPress, sm }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <>
        <Image
          style={{
            width: sm ? 70 : 140,
            height: sm ? 70 : 140,
            position: "absolute",
            top: sm ? -35 : -70,
            alignSelf: "center",
            zIndex: 9999,
          }}
          resizeMode="contain"
          source={image}
        />
        <View style={styles.textContainer}>
          <AppText style={[styles.title, { fontSize: sm ? 11 : 15 }]}>
            {title}
          </AppText>
          <AppText style={[styles.subTitle, { fontSize: sm ? 11 : 15 }]}>
            {subTitle}
          </AppText>
        </View>
      </>
    </TouchableHighlight>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 15,
    width: "47%",
    marginHorizontal: 6,

    marginTop: 50,
  },
  textContainer: {
    paddingTop: 40,
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
  subTitle: {
    color: colors.theme,
  },
});
