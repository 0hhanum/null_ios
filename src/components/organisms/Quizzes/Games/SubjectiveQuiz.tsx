import BaseView from "components/atoms/View/BaseView";
import React from "react";
import styled from "styled-components/native";
import { IQuizGame } from "types/quizzes/quizGameType";
import AnswerSection from "./SubjectiveQuizzes/AnswerSection";
import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";

const AnswerInputContainer = styled(BaseView)`
  margin-top: 15px;
  flex: 1;
`;
const SubjectiveQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  return (
    <>
      <QuizQuestionCard question={quiz.question} />
      <AnswerInputContainer>
        <AnswerSection
          solvedCallback={solvedCallback}
          answer={quiz.answer[0]}
        />
      </AnswerInputContainer>
    </>
  );
};

export default SubjectiveQuiz;
