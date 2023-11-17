import AppearAnimationText from "components/molecules/Texts/AppearAnimationText";
import BlankQuizBlankText from "components/molecules/Texts/quizzes/BlankQuizBlankText";
import QuestionText from "components/molecules/Texts/quizzes/QuestionText";
import React from "react";
import { IQuiz } from "types/quizzes/quizTypes";

interface IBlankQuizQuestionText {
  question: IQuiz["question"];
  userAnswers: string[];
}
const BLANK_IDENTIFIER = "<빈칸>";

const BlankQuizQuestionText = ({
  question,
  userAnswers,
}: IBlankQuizQuestionText) => {
  let blankCounter = 0;
  return (
    <>
      {question.map((text, index) =>
        text.startsWith(BLANK_IDENTIFIER) ? (
          userAnswers.length > blankCounter ? (
            <AppearAnimationText
              text={userAnswers[blankCounter++]} // increase blankCounter
              key={index}
            />
          ) : (
            <BlankQuizBlankText
              key={index}
              isCurrentTarget={userAnswers.length === blankCounter++} // increase blankCounter
            />
          )
        ) : (
          <QuestionText text={text} key={index} />
        )
      )}
    </>
  );
};

export default BlankQuizQuestionText;
