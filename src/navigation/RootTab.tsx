import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/views/rootTabs/Home";
import Analysis from "../components/views/rootTabs/Analysis";
import TodayQuiz from "../components/views/rootTabs/TodayQuiz";
import Bookmark from "../components/views/rootTabs/Bookmark";
import { useTheme } from "styled-components/native";

const Tab = createBottomTabNavigator();
const RootTab = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      id="rootTab"
      sceneContainerStyle={{
        backgroundColor: theme.bgColor,
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.bgColor,
        },
        headerTintColor: theme.textColor,
        headerTitleAlign: "left",
        tabBarStyle: {
          backgroundColor: theme.bgColor,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "홈",
          headerTitle: "홈",
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={Analysis}
        options={{
          tabBarLabel: "분석",
          headerTitle: "분석",
        }}
      />
      <Tab.Screen
        name="TodayQuiz"
        component={TodayQuiz}
        options={{
          tabBarLabel: "오늘의 퀴즈",
          headerTitle: "오늘의 퀴즈",
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: "북마크",
          headerTitle: "북마크",
        }}
      />
    </Tab.Navigator>
  );
};
export default RootTab;
