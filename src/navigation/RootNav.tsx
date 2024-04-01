import React, { useEffect } from "react";
import RootTabNav from "./RootTabNav";
import RootStackNav from "./RootStackNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { setNotificationListener } from "notifications/notification";

const NativeStack = createNativeStackNavigator();

const RootNav = () => {
  const navigation = useNavigation();
  // for navigate updated quiz
  useEffect(() => {
    setNotificationListener(navigation);
  }, []);

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
