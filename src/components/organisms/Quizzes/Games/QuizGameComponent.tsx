import React from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import { 문제유형 } from "types/quizzes/quizTypes";
import ObjectiveQuiz from "./ObjectiveQuiz";
import SubjectiveQuiz from "./SubjectiveQuiz";
import OXQuiz from "./OXQuiz";
import BlankQuiz from "./BlankQuiz";

interface IQuizGameComponent extends IQuizGame {
  type: 문제유형;
}
const QuizGameComponent = ({ type, ...props }: IQuizGameComponent) => {
  switch (type) {
    case "객관식":
      return <ObjectiveQuiz {...props} />;
    case "주관식":
      return <SubjectiveQuiz {...props} />;
    case "OX":
      return <OXQuiz {...props} />;
    case "빈칸":
      return <BlankQuiz {...props} />;
  }
};

export default QuizGameComponent;
