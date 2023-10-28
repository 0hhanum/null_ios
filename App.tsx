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
import { OrientationLock, lockAsync } from "expo-screen-orientation";

preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts(AntDesign.font);
  const [user, setUser] = useState<UserCredential>(null);
  useEffect(() => {
    const initialize = async () => {
      const user = await initializeFirebase(); // initialize firebase
      setUser(user);
      await lockAsync(OrientationLock.PORTRAIT_UP); // lock device orientation
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
