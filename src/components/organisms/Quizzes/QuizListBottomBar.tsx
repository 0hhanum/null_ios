import { useNavigation } from "@react-navigation/native";
import CancelButton from "components/atoms/Buttons/CancelButton";
import QuizPlayButton from "components/molecules/Buttons/Quizzes/QuizPlayButton";
import React from "react";
import { RecoilValueReadOnly, useRecoilValueLoadable } from "recoil";
import styled from "styled-components/native";
import { IQuiz } from "types/quizzes/quizTypes";

interface IQuizListBottomBar {
  selector: RecoilValueReadOnly<IQuiz[]>;
  onPlay: (quizzes: IQuiz[]) => void;
}
const Container = styled.View`
  flex-direction: row;
`;
const QuizListBottomBar = ({ onPlay, selector }: IQuizListBottomBar) => {
  const quizzes = useRecoilValueLoadable<IQuiz[]>(selector);
  const navigation = useNavigation<any>();
  const goBack = () => navigation.goBack();
  const playQuiz = () => {
    if (quizzes.state !== "hasValue") return;
    onPlay(quizzes.contents);
  };
  return (
    <Container>
      <QuizPlayButton onPress={playQuiz} />
      <CancelButton size={70} onPress={goBack} />
    </Container>
  );
};

export default QuizListBottomBar;
