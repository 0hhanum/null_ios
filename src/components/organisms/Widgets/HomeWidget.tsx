import { useNavigation } from "@react-navigation/native";
import Widget, { IWidget } from "components/molecules/Widgets/Widget";
import React from "react";
import styled from "styled-components/native";
import { category } from "types/quizzes/quizTypes";

interface IHomeWidget {
  category: category;
}
type widgets = Record<category, IWidget>;

const widgets: widgets = {
  fe: {
    bgColor: "white",
    cardType: "banner",
    name: "FE",
  },
  js: {
    name: "JS",
    bgColor: "#f7df1e",
  },
  ts: {
    name: "TS",
    bgColor: "#007acc",
    textColor: "white",
  },
  react: {
    name: "React",
    iconPath: require("@assets/images/logos/svgs/react.svg"),
    bgColor: "#61DBFB",
    cardType: "banner",
  },
  cs: { bgColor: "blue", cardType: "banner", name: "CS" },
};
const WidgetContainer = styled.Pressable`
  margin-bottom: 15px;
`;
const HomeWidget = ({ category }: IHomeWidget) => {
  const navigation = useNavigation<any>();
  const onPress = () => {
    navigation.navigate("RootStackNav", {
      screen: "Quiz",
      params: {
        category,
      },
    });
  };
  return (
    <WidgetContainer onPress={onPress}>
      <Widget {...widgets[category]} />
    </WidgetContainer>
  );
};

export default HomeWidget;
