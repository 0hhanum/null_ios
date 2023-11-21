import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";
import QuestionTexts from "components/molecules/Texts/quizzes/QuestionTexts";
import React from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import OXQuizButtons from "./OXQuizzes/OXQuizButtons";
import { OXEnum } from "types/quizzes/quizTypes";

const OXQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  return (
    <>
      <QuizQuestionCard
        QuestionTextComponent={<QuestionTexts question={quiz.question} />}
      />
      <OXQuizButtons
        solvedCallback={solvedCallback}
        answer={quiz.answer[0] as OXEnum}
      />
    </>
  );
};

export default OXQuiz;
