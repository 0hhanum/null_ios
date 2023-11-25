import React, { useState } from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import { answerEnum, quizState } from "types/quizzes/quizTypes";
import QuizChoices from "../QuizChoices";
import { APPEAR_TEXT_ANIMATION_DURATION } from "components/molecules/Texts/AppearAnimationText";
import styled from "styled-components/native";
import BaseView from "components/atoms/View/BaseView";

interface IBlankQuizChoices {
  choicesList: string[][];
  solvedCallback: IQuizGame["solvedCallback"];
  answers: string[];
  saveUserAnswer: (string) => void;
}
const Container = styled(BaseView)`
  margin-top: ${(props) => `${50 * props.theme.heightRatio}px`};
`;
const BlankQuizChoices = ({
  choicesList,
  solvedCallback,
  answers,
  saveUserAnswer,
}: IBlankQuizChoices) => {
  const [questionCounter, setQuizQuestionCounter] = useState(0); // blank quiz questions are multiple
  const [userQuizResult, setUserQuizResult] = useState(quizState.solved);
  const currentAnswerIndex = answerEnum[answers[questionCounter]];
  const currentAnswerText = choicesList[questionCounter][currentAnswerIndex];
  const onChoice = (index: number) => {
    const solved = index === currentAnswerIndex;
    if (!solved) {
      // wrong answer
      setUserQuizResult(quizState.wrong);
    }
    saveUserAnswer(choicesList[questionCounter][index]); // render user answer to blank
    if (questionCounter === choicesList.length - 1) {
      // solved all blank
      setTimeout(() => {
        solvedCallback(
          userQuizResult === quizState.solved && solved
            ? quizState.solved
            : quizState.wrong
        ); // 마지막 빈칸만 틀리면 상태 업데이트 전의 userQuizResult로 실행되어버림
      }, currentAnswerText.length * APPEAR_TEXT_ANIMATION_DURATION); // execute callback after text animation
    } else {
      setTimeout(() => {
        setQuizQuestionCounter((curr) => curr + 1); // next question
      }, 500); // execute callback after color effect
    }
  };
  return (
    <Container>
      <QuizChoices
        onChoice={onChoice}
        answer={currentAnswerText}
        choices={choicesList[questionCounter]}
      />
    </Container>
  );
};

export default BlankQuizChoices;
