import { View } from "react-native";
import MainScreens from "./src/MainScreens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainScreens />
    </GestureHandlerRootView>
  );
}
