import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
// import CarouselItems from "./CarouselItems";

export default function Carousel({ data }) {
  const contentoffset = useSharedValue(0);

  const { width: window_width } = Dimensions.get("window");
  const list_items_width = window_width / 4;

  const CarouselItem = React.memo(({ item, index, contentOffset }) => {
    const rStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 2) * list_items_width,
        (index - 1) * list_items_width,
        index * list_items_width,
        (index + 1) * list_items_width,
        (index + 2) * list_items_width,
      ];

      const outputRange = [
        10,
        -list_items_width / 3,
        -list_items_width / 2,
        -list_items_width / 3,
        0,
      ];

      const outputRangeScale = [0.7, 0.9, 1, 0.9, 0.7];
      const opacityScale = [0.7, 0.8, 1, 0.8, 0.7];

      const transY = interpolate(
        contentOffset.value,
        inputRange,
        outputRange,
        Extrapolation.CLAMP
      );

      const opacity = interpolate(
        contentOffset.value,
        inputRange,
        opacityScale,
        Extrapolation.CLAMP
      );

      const scale = interpolate(
        contentOffset.value,
        inputRange,
        outputRangeScale,
        Extrapolation.CLAMP
      );

      return {
        opacity,
        transform: [
          {
            translateY: transY,
          },
          {
            translateX: list_items_width / 2 + list_items_width / 2,
          },
          {
            scale,
          },
        ],
      };
    });

    return (
      <Animated.View
        style={[
          {
            width: list_items_width,
            aspectRatio: 1,
            elevation: 5,
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 20,
          },
          rStyle,
        ]}
      >
        <Image
          source={item}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            margin: 3,
            borderRadius: 200,
            borderWidth: 2,
            borderColor: "white",
            shadowColor: "black",
          }}
          resizeMode="cover"
        />
      </Animated.View>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={list_items_width}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        onScrollEventThrottle={26} //60fps -> 16ms(1000ms / 60fps)
        onScroll={(e) => {
          contentoffset.value = e.nativeEvent.contentOffset.x;
        }}
        style={{
          position: "absolute",
          bottom: 0,
          height: 300,
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 3 * list_items_width,
        }}
        renderItem={({ item, index }) => (
          <CarouselItem
            item={item}
            index={index}
            contentOffset={contentoffset}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
