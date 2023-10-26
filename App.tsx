import React, { useEffect, useState } from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { defaultTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components/native";
import { RecoilRoot } from "recoil";
import Router from "./src/router/Router";
import initializeFirebase from "firebases/initializeFirebase";

preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts(AntDesign.font);
  const [isFirebaseAppLoaded, setIsFirebaseAppLoaded] = useState(false);
  useEffect(() => {
    const initializeFirebaseApp = async () => {
      await initializeFirebase();
      setIsFirebaseAppLoaded(true);
    };
    initializeFirebaseApp();
  }, []);
  if (fontsLoaded && isFirebaseAppLoaded) {
    hideAsync();
    return (
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </ThemeProvider>
      </RecoilRoot>
    );
  }
}
