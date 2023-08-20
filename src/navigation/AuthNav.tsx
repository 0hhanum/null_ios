import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../components/views/auths/Landing";

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
    </NativeStack.Navigator>
  );
};

export default AuthNav;
