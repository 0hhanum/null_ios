import BaseView from "components/atoms/View/BaseView";
import React from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import styled from "styled-components/native";
import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";
import QuizChoices from "components/molecules/Buttons/Quizzes/QuizChoices";

const QuestionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;
const ChoicesContainer = styled.View`
  margin-top: 40px;
`;
const ObjectiveQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  return (
    <BaseView>
      <QuestionContainer>
        <QuizQuestionCard question={quiz.question} />
      </QuestionContainer>
      <ChoicesContainer>
        <QuizChoices
          solvedCallback={solvedCallback}
          choices={quiz.choices as string[]}
          answer={quiz.answer[0]}
        />
      </ChoicesContainer>
    </BaseView>
  );
};

export default ObjectiveQuiz;
