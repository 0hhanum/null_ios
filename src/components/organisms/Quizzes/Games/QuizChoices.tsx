import QuizChoiceButton from "components/atoms/Buttons/QuizChoiceButton";
import { getWindowRatio } from "components/utils";
import React from "react";

interface IQuizChoices {
  onChoice: (choice: number) => void;
  answer: string;
  choices: string[];
}

const { heightRatio } = getWindowRatio();
const BUTTON_HEIGHT_TWO_ELEMENTS = 120 * heightRatio;
const BUTTON_HEIGHT_FOUR_ELEMENTS = 60 * heightRatio;

const QuizChoices = ({ choices, answer, onChoice }: IQuizChoices) => {
  return (
    <>
      {choices.map((choice, index) => (
        <QuizChoiceButton
          key={choice}
          onChoice={() => onChoice(index)}
          height={
            choices.length === 2
              ? BUTTON_HEIGHT_TWO_ELEMENTS
              : BUTTON_HEIGHT_FOUR_ELEMENTS
          }
          choiceText={choice}
          answer={answer}
        ></QuizChoiceButton>
      ))}
    </>
  );
};

export default QuizChoices;
