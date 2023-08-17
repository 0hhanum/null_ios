import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPage from "../components/views/rootStacks/MyPage";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default RootStack;
