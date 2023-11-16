import React from "react";
import QuestionText from "./QuestionText";

interface IQuestionTexts {
  question: string[];
}
const QuestionTexts = ({ question }: IQuestionTexts) => {
  return (
    <>
      {question.map((text, index) => (
        <QuestionText text={text} key={index} />
      ))}
    </>
  );
};

export default QuestionTexts;
