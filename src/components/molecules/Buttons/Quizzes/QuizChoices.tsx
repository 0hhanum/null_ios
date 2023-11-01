import React, { useState } from "react";
import QuizChoiceButton, {
  quizBtnState,
} from "components/atoms/Buttons/QuizChoiceButton";
import BaseText from "components/atoms/Texts/BaseText";
import { IQuizGame } from "types/quizzes/quizGameType";

interface IQuizChoices {
  choices: string[];
  solvedCallback: IQuizGame["solvedCallback"];
  answer: string;
}
const ANSWERS = ["A", "B", "C", "D"];
const BUTTON_SIZE_TWO_ELEMENTS = 120;
const BUTTON_SIZE_FOUR_ELEMENTS = 60;

const QuizChoices = ({ choices, solvedCallback, answer }: IQuizChoices) => {
  const [answerState, setAnswerState] = useState<[number, quizBtnState]>([
    -1,
    null,
  ]);
  const onChoice = (index) => {
    if (ANSWERS[index] === answer) {
      solvedCallback("solved");
      setAnswerState([index, quizBtnState.correct]);
    } else {
      solvedCallback("wrong");
      setAnswerState([index, quizBtnState.wrong]);
    }
  };
  return (
    <>
      {choices.map((choice, index) => (
        <QuizChoiceButton
          key={index}
          onPress={() => onChoice(index)}
          state={answerState[0] === index ? answerState[1] : null}
          height={
            choices.length === 2
              ? BUTTON_SIZE_TWO_ELEMENTS
              : BUTTON_SIZE_FOUR_ELEMENTS
          }
        >
          <BaseText size="small">{choice}</BaseText>
        </QuizChoiceButton>
      ))}
    </>
  );
};

export default QuizChoices;
