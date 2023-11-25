import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../components/pages/rootTabs/Home";
import Bookmark from "../components/pages/rootTabs/Bookmark";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Wrong from "../components/pages/rootTabs/Wrong";
import Recent from "components/pages/rootTabs/Recent";

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
            <Pressable
              onPress={() =>
                navigation.navigate("RootStackNav", { screen: "MyPage" })
              }
            >
              <AntDesign name="user" size={28} color={theme.textColor} />
            </Pressable>
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
        unmountOnBlur: true,
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
        name="Recent"
        component={Recent}
        options={{
          tabBarLabel: "최근 푼 문제",
          headerTitle: "복습은 필수",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircleo" size={18} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wrong"
        component={Wrong}
        options={{
          tabBarLabel: "오답노트",
          headerTitle: "재도전 !",
          tabBarIcon: ({ color }) => (
            <AntDesign name="edit" size={18} color={color} />
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
