import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../components/pages/auths/Landing";
import EmailLogin from "components/pages/auths/EmailLogin";

const NativeStack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "fullScreenModal",
      }}
    >
      <NativeStack.Screen name="Landing" component={Landing} />
      <NativeStack.Screen name="EmailLogin" component={EmailLogin} />
    </NativeStack.Navigator>
  );
};

export default AuthNav;
