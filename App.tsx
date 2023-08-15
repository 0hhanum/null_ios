import React, { useEffect } from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigation/Root";

preventAutoHideAsync();
export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
