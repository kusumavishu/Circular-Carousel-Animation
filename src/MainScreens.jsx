import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./components/home_screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllAnimation from "./components/first_screens/AllAnimation";
import Animation2 from "./components/home_screens/Animation2";
import PushNotification from "./components/PushNofications/PushNotification";
import GoogleAdsMob from "./components/Google Ads/GoogleAdsMob";

const Stack = createNativeStackNavigator();

export default function MainScreens() {
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AllAnimation"
          component={AllAnimation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Animation1"
          component={HomeScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Animation2"
          component={Animation2}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PushNotification"
          component={PushNotification}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="GoogleAdsMob"
          component={GoogleAdsMob}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
