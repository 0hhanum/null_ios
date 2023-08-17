import React from "react";
import RootTab from "./RootTab";
import RootStack from "./RootStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator();

const Root = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "fullScreenModal",
      }}
    >
      <NativeStack.Screen name="RootTab" component={RootTab} />
      <NativeStack.Screen name="RootStack" component={RootStack} />
    </NativeStack.Navigator>
  );
};

export default Root;
