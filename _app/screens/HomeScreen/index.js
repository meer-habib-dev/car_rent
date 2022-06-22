import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/_common/Screen";
import UserInfo from "./sections/UserInfo";
import Search from "./sections/Search";
import { colors } from "../../utils/config/colors";
import AppTitle from "../../components/_common/AppTitle";
import AppImage from "../../components/_common/AppImage";
import Card from "../../components/_car/Card";
import { useNavigation } from "@react-navigation/native";

const logos = [
  {
    id: 1,
    logo: require("../../utils/assets/bmw.png"),
  },
  {
    id: 2,
    logo: require("../../utils/assets/lambo-logo.png"),
  },
  {
    id: 3,
    logo: require("../../utils/assets/mer-logo.png"),
  },
];

const cards = [
  {
    id: 1,
    image: require("../../utils/assets/lambo.png"),
    title: "Lamborghini Urus",
    subTitle: "$520/day",
    slug: "CarDetailsScreen",
  },
  {
    id: 2,
    image: require("../../utils/assets/mer.png"),
    title: "BMW M7 Series",
    subTitle: "$350/day",
    slug: "bmw-details",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <UserInfo />
        <Search />
      </View>
      <View style={styles.carHero}>
        <AppTitle title={"Top Brand"} more={"more"} />
        <View style={styles.logoContainer}>
          <FlatList
            data={logos}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => <AppImage image={item.logo} />}
          />
        </View>
        <AppTitle title={"Recomandations"} more={"more"} />
        <View style={styles.cardContainer}>
          <FlatList
            data={cards}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <Card
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                onPress={() => navigation.navigate(item.slug)}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  carHero: {
    backgroundColor: colors.primary,
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginTop: 10,
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  cardContainer: {},
});
