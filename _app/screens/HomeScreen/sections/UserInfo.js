import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CarPickerInfo from "../../../components/_car/CarPickerInfo";
import { colors } from "../../../utils/config/colors";

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <CarPickerInfo
          title={"Your Location"}
          subTitle={"Mireman San Diego"}
          name={"map-marker"}
          iconSize={30}
          IconColor={colors.theme}
        />
      </View>
      <View>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "gray",
          }}
          source={require("../../../utils/assets/user.jpg")}
        />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  pickerContainer: {
    flex: 1,
  },
});
