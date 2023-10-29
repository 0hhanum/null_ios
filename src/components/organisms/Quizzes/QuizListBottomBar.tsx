import { useNavigation } from "@react-navigation/native";
import CancelButton from "components/atoms/Buttons/CancelButton";
import QuizPlayButton from "components/molecules/Buttons/Quizzes/QuizPlayButton";
import React from "react";
import styled from "styled-components/native";
import { category } from "types/quizzes/quizTypes";

interface IQuizListBottomBar {
  category: category;
}
const Container = styled.View`
  flex-direction: row;
`;
const QuizListBottomBar = ({ category }: IQuizListBottomBar) => {
  const navigation = useNavigation<any>();
  const goBack = () => navigation.goBack();
  const playQuiz = () => {
    navigation.navigate("Quiz", { category });
  };
  return (
    <Container>
      <QuizPlayButton onPress={playQuiz} />
      <CancelButton size={70} onPress={goBack} />
    </Container>
  );
};

export default QuizListBottomBar;
