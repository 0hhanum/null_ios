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
import UserUidContainer from "containers/auths/UserUidContainer";
import { UserCredential } from "firebase/auth";
import {
  initializePushNotification,
  setNotificationHandler,
} from "notifications/notification";

preventAutoHideAsync();
setNotificationHandler();

export default function App() {
  const [fontsLoaded] = useFonts(AntDesign.font);
  const [user, setUser] = useState<UserCredential>(null);
  useEffect(() => {
    const initialize = async () => {
      try {
        const user = await initializeFirebase(); // initialize firebase
        setUser(user);
      } catch (e) {
        alert("오류가 발생했습니다. 다시 시도해 주세요.");
      }
      try {
        const token = await initializePushNotification();
        if (token && user) {
          // TODO:: make notification listener hooks
        }
      } catch (SimulatorNotificationError) {
        // Simulator doesn't has token
        console.log("run on simulator");
      }
    };
    initialize();
  }, []);
  if (fontsLoaded && user) {
    hideAsync();
    return (
      <RecoilRoot>
        <UserUidContainer uid={user?.user.uid} />
        <ThemeProvider theme={defaultTheme}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </ThemeProvider>
      </RecoilRoot>
    );
  }
}
