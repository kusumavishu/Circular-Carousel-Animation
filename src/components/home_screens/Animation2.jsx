import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100.0;

export default function Animation2() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    console.log("Opacity", progress.value, scale.value);
    return {
      opacity: progress.value,
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0.5, { duration: 5000 });
    scale.value = withTiming(0.5, { duration: 5000 });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>jjj</Text> */}
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: "blue",
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
