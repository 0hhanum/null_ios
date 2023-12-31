import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import MyPage from "../components/pages/rootStacks/MyPage";
import Settings from "../components/pages/rootStacks/Settings";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import Quiz from "components/pages/rootStacks/quizzes/Quiz";
import QuizList from "components/pages/rootStacks/quizzes/QuizList";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();
const RootStackNav: React.FC<NativeStackScreenProps<any, "RootStackNav">> = ({
  navigation,
}) => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        orientation: "portrait_up",
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
              <Pressable onPress={() => navigation.navigate("Settings")}>
                <AntDesign name="setting" size={22} color={theme.textColor} />
              </Pressable>
            );
          },
          headerLeft() {
            return (
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={18} color={theme.textColor} />
              </Pressable>
            );
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "설정" }}
      />
      <Stack.Screen
        name="QuizList"
        component={QuizList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          presentation: "fullScreenModal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNav;
