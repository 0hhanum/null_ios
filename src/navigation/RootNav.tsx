import React from "react";
import RootTabNav from "./RootTabNav";
import RootStackNav from "./RootStackNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator();

const RootNav = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "fullScreenModal",
        orientation: "portrait_up",
      }}
    >
      <NativeStack.Screen name="RootTabNav" component={RootTabNav} />
      <NativeStack.Screen name="RootStackNav" component={RootStackNav} />
    </NativeStack.Navigator>
  );
};

export default RootNav;
