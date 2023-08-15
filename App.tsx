import React from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import Root from "./src/navigation/Root";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { defaultTheme } from "./styles/theme";

preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts(AntDesign.font);
  if (fontsLoaded) {
    hideAsync();
    return (
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
