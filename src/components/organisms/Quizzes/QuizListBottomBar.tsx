import { useNavigation } from "@react-navigation/native";
import CancelButton from "components/atoms/Buttons/CancelButton";
import QuizPlayButton from "components/molecules/Buttons/Quizzes/QuizPlayButton";
import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { quizzesSelectorByCategory } from "recoil/firebases/quizzes/selector";
import styled from "styled-components/native";
import { IQuiz, category, quizState } from "types/quizzes/quizTypes";

interface IQuizListBottomBar {
  category: category;
}
const Container = styled.View`
  flex-direction: row;
`;
const QuizListBottomBar = ({ category }: IQuizListBottomBar) => {
  const quizzes = useRecoilValueLoadable<IQuiz[]>(
    quizzesSelectorByCategory(category)
  );
  const navigation = useNavigation<any>();
  const goBack = () => navigation.goBack();
  const playQuiz = () => {
    if (quizzes.state !== "hasValue") return;
    const pendingQuizzes = quizzes.contents.filter(
      (quiz: IQuiz) => quiz.state !== quizState.solved
    );
    navigation.navigate("Quiz", {
      quizzes: pendingQuizzes.length !== 0 ? pendingQuizzes : quizzes.contents,
    });
  };
  return (
    <Container>
      <QuizPlayButton onPress={playQuiz} />
      <CancelButton size={70} onPress={goBack} />
    </Container>
  );
};

export default QuizListBottomBar;
