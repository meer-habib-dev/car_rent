import { Image, StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { colors } from "../../utils/config/colors";
import Batch from "../../components/_car/Batch";
import AppText from "../../components/_common/AppText";
import AppTitle from "../../components/_common/AppTitle";
import AppImage from "../../components/_common/AppImage";
import Card from "../../components/_car/Card";
import AppButton from "../../components/_common/AppButton";
import { useNavigation } from "@react-navigation/native";
import CarPickerInfo from "../../components/_car/CarPickerInfo";

const details = [
  {
    id: 2,
    title: "Pickup Date",
    subTitle: "Fri-17-jun",
    name: "calendar-account-outline",
  },
  {
    id: 3,
    title: "Time",
    subTitle: "02:45 PM",
    name: "calendar-account-outline",
  },
  {
    id: 4,
    title: "Drop-off Date",
    subTitle: "Mon-25-jun",
    name: "clock-time-eight-outline",
  },
  {
    id: 5,
    title: "Time",
    subTitle: "07:45 AM",
    name: "clock-time-eight-outline",
  },
  {
    id: 1,
    title: "Pickup Location",
    subTitle: "Miramar, Diego",
    name: "location-enter",
  },
];

const CarPickupScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 400 }}
        source={require("../../utils/assets/usgs-PuLsDCBbyBM-unsplash.jpg")}
      />

      <Image
        style={{
          width: "80%",
          position: "absolute",
          top: "4%",
          // left: "15%",
          zIndex: 999,
          alignSelf: "center",
        }}
        resizeMode="contain"
        source={require("../../utils/assets/Lamborghini-Urus-PNG.png")}
      />

      <View style={styles.carHero}>
        <View style={styles.titleContainer}>
          <AppTitle title={"Rent Details"} subTitle={"$4250"} />
        </View>
        <View style={{ flex: 0, marginTop: 20 }}>
          <FlatList
            data={details}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item, index }) => (
              <CarPickerInfo
                name={item.name}
                title={item.title}
                subTitle={item.subTitle}
                iconSize={25}
                IconColor={colors.theme}
                index={index}
                bg
                sm
              />
            )}
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            title={"Proceed To Payment"}
            onPress={() => Navigation.navigate("CarPickupScreen")}
          />
        </View>
      </View>
    </View>
  );
};

export default CarPickupScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: colors.theme,
    fontSize: 16,
  },
  carHero: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    // marginTop: 10,
    paddingTop: 35,
    paddingHorizontal: 20,
    marginTop: -15,
  },
  titleContainer: {
    marginTop: 20,
  },
  btn: {
    marginTop: 10,
  },
});
