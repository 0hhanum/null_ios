import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../components/views/rootTabs/Home";
import Analysis from "../components/views/rootTabs/Analysis";
import TodayQuiz from "../components/views/rootTabs/TodayQuiz";
import Bookmark from "../components/views/rootTabs/Bookmark";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import IconBtn from "../components/atoms/Buttons/IconBtn";

const Tab = createBottomTabNavigator();
const RootTabNav: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      id="RootTabNav"
      sceneContainerStyle={{
        backgroundColor: theme.bgColor,
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.bgColor,
          height: 120,
        },
        headerTitleStyle: {
          fontSize: theme.variables.fontSize.large,
        },
        headerRight() {
          return (
            <IconBtn
              onPress={() =>
                navigation.navigate("RootStackNav", { screen: "MyPage" })
              }
            >
              <AntDesign name="user" size={28} color={theme.textColor} />
            </IconBtn>
          );
        },
        headerRightContainerStyle: {
          paddingRight: 10,
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
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore1" size={18} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={Analysis}
        options={{
          tabBarLabel: "분석",
          headerTitle: "분석",
          tabBarIcon: ({ color }) => (
            <AntDesign name="barschart" size={18} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TodayQuiz"
        component={TodayQuiz}
        options={{
          tabBarLabel: "오늘의 퀴즈",
          headerTitle: "오늘의 퀴즈",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={18} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: "북마크",
          headerTitle: "북마크",
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={18} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default RootTabNav;
