import { useNavigation } from "@react-navigation/native";
import Widget from "components/molecules/Widgets/Widget";
import React from "react";
import styled from "styled-components/native";
import { category } from "types/quizzes/quizTypes";

interface IHomeWidget {
  category: category;
}
const WidgetContainer = styled.Pressable`
  margin-bottom: 15px;
`;
const HomeWidget = ({ category }: IHomeWidget) => {
  const navigation = useNavigation<any>();
  const onPress = () => {
    navigation.navigate("RootStackNav", {
      screen: "QuizList",
      params: {
        category,
      },
    });
  };
  const cardType = ["js", "ts"].includes(category) ? "square" : "banner";
  return (
    <WidgetContainer onPress={onPress}>
      <Widget category={category} cardType={cardType} />
    </WidgetContainer>
  );
};

export default HomeWidget;
