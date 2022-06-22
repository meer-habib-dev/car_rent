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

const details = [
  {
    id: 1,
    title: "Capacity",
    subTitle: "4 seats",
    image: require("../../utils/assets/seat.png"),
  },
  {
    id: 2,
    title: "Max speed",
    subTitle: "256 KM/h",
    image: require("../../utils/assets/engine.png"),
  },
  {
    id: 3,
    title: "Engine power",
    subTitle: "580 HP",
    image: require("../../utils/assets/piston.png"),
  },
];
const CarDetailsScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 400 }}
        source={require("../../utils/assets/usgs-PuLsDCBbyBM-unsplash.jpg")}
      />

      <Image
        style={{
          width: 700,
          position: "absolute",
          top: "-4%",
          left: "15%",
          zIndex: 999,
        }}
        resizeMode="contain"
        source={require("../../utils/assets/Lamborghini-Urus-PNG.png")}
      />

      <View style={styles.carHero}>
        <View style={styles.batchContainer}>
          <Batch title={"SUV Car"} />
          <Batch title={"Off Road"} />
        </View>
        <View>
          <AppTitle
            title={"Lamborghini Urus (2022) "}
            image={require("../../utils/assets/lambo-logo.png")}
          />
          <AppText style={styles.text}>$520/day</AppText>
        </View>
        <View style={{ flex: 0 }}>
          <FlatList
            data={details}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                sm
              />
            )}
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            title={"Book Car"}
            onPress={() => Navigation.navigate("CarPickupScreen")}
          />
        </View>
      </View>
    </View>
  );
};

export default CarDetailsScreen;

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
    marginTop: 10,
    paddingTop: 35,
    paddingHorizontal: 20,
    marginTop: -15,
  },
  batchContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
  btn: {
    marginTop: 7,
  },
});
