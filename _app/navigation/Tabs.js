import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../utils/config/colors";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import CartScreen from "../screens/Cart";
import NotificationScreen from "../screens/Notification";
import ProfileScreen from "../screens/Profile";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: colors.secondary,
          borderTopWidth: 0,
          borderRadius: 15,
          marginTop: -15,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="home"
                size={24}
                color={focused ? colors.theme : colors.nav}
              />
              {/* <Text style={{ color: focused ? "orange" : "black" }}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <MaterialIcons
                name="batch-prediction"
                size={24}
                color={focused ? colors.theme : colors.nav}
              />
              {/* <Text style={{ color: focused ? "orange" : "black" }}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="notifications"
                size={24}
                color={focused ? colors.theme : colors.nav}
              />
              {/* <Text style={{ color: focused ? "orange" : "black" }}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="user"
                size={24}
                color={focused ? colors.theme : colors.nav}
              />
              {/* <Text style={{ color: focused ? "orange" : "black" }}>Home</Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
