import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "../custom_screens/Carousel";

const data = [
  require("../../../assets/Ellipse_229.png"),
  require("../../../assets/Ellipse_230.png"),
  require("../../../assets/Ellipse_231.png"),
  require("../../../assets/Ellipse_232.png"),
  require("../../../assets/Ellipse_233.png"),
  require("../../../assets/Ellipse_234.png"),
  require("../../../assets/Ellipse_235.png"),
  require("../../../assets/Ellipse_236.png"),
  require("../../../assets/Ellipse_237.png"),
];

export default function HomeScreen() {
  return (
    <>
      <Carousel data={data} />
    </>
  );
}

const styles = StyleSheet.create({});
