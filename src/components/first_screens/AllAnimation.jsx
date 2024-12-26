import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AllAnimation() {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex justify-center items-center" style={{ flex: 1 }}>
        <TouchableOpacity
          className="bg-[#6200eac8] p-4 rounded-lg my-2"
          onPress={() => navigation.navigate("Animation1")}
        >
          <Text className="text-white font-bold">Animation 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#6200eac8] p-4 rounded-lg my-2"
          onPress={() => navigation.navigate("Animation2")}
        >
          <Text className="text-white font-bold">Animation 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#6200eac8] p-4 rounded-lg my-2"
          onPress={() => navigation.navigate("PushNotification")}
        >
          <Text className="text-white font-bold">Push Nofication</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#6200eac8] p-4 rounded-lg my-2"
          onPress={() => navigation.navigate("GoogleAdsMob")}
        >
          <Text className="text-white font-bold">Google AdsMob</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
