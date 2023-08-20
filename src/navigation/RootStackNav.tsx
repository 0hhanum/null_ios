import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import MyPage from "../components/views/rootStacks/MyPage";
import Settings from "../components/views/rootStacks/Settings";
import { useTheme } from "styled-components/native";
import IconBtn from "../components/atoms/Buttons/IconBtn";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const RootStackNav: React.FC<NativeStackScreenProps<any, "RootStackNav">> = ({
  navigation,
}) => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "card",
        headerShown: true,
        headerStyle: { backgroundColor: theme.bgColor },
        headerTintColor: theme.textColor,
        headerTitleStyle: {
          fontSize: theme.variables.fontSize.medium,
        },
        contentStyle: { backgroundColor: theme.bgColor },
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerTitle: "내 정보",
          headerRight() {
            return (
              <IconBtn onPress={() => navigation.navigate("Settings")}>
                <AntDesign name="setting" size={22} color={theme.textColor} />
              </IconBtn>
            );
          },
          headerLeft() {
            return (
              <IconBtn onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={18} color={theme.textColor} />
              </IconBtn>
            );
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "설정" }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNav;
