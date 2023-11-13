import BaseView from "components/atoms/View/BaseView";
import React from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import styled from "styled-components/native";
import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";
import QuizChoices from "components/organisms/Quizzes/Games/ObjectiveQuizzes/QuizChoices";
import QuestionContainer from "components/atoms/Quizzes/S.QuestionContainer";

const ChoicesContainer = styled(BaseView)`
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
