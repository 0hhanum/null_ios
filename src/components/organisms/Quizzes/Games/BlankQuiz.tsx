import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";
import React, { useState } from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import BlankQuizQuestionText from "./BlankQuizzes/BlankQuizQuestionText";
import BlankQuizChoices from "./BlankQuizzes/BlankQuizChoices";

const BlankQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const saveUserAnswer = (userAnswer) => {
    setUserAnswers((curr) => [...curr, userAnswer]);
  };
  return (
    <>
      <QuizQuestionCard
        QuestionTextComponent={
          <BlankQuizQuestionText
            question={quiz.question}
            userAnswers={userAnswers}
          />
        }
      />
      <BlankQuizChoices
        choicesList={quiz.choices as string[][]}
        solvedCallback={solvedCallback}
        answers={quiz.answer}
        saveUserAnswer={saveUserAnswer}
      />
    </>
  );
};

export default BlankQuiz;
