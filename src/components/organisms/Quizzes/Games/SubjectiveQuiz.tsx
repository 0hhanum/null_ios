import BaseView from "components/atoms/View/BaseView";
import React from "react";
import styled from "styled-components/native";
import { IQuizGame } from "types/quizzes/quizGameType";
import AnswerSection from "./SubjectiveQuizzes/AnswerSection";
import QuestionContainer from "../QuizQuestionContainer";

const AnswerInputContainer = styled(BaseView)`
  margin-top: 15px;
  flex: 1;
`;
const SubjectiveQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  return (
    <>
      <QuestionContainer question={quiz.question} />
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
