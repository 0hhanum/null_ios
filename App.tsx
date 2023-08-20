import React from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { defaultTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components/native";
import { RecoilRoot } from "recoil";
import { RealmProvider } from "@realm/react";
import schemas from "./src/db";
import Router from "./src/router/Router";

preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts(AntDesign.font);
  if (fontsLoaded) {
    hideAsync();
    return (
      <RecoilRoot>
        <RealmProvider schema={schemas} deleteRealmIfMigrationNeeded={true}>
          <ThemeProvider theme={defaultTheme}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </ThemeProvider>
        </RealmProvider>
      </RecoilRoot>
    );
  }
}
