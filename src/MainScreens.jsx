import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./components/home_screens/HomeScreen";

export default function MainScreens() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
