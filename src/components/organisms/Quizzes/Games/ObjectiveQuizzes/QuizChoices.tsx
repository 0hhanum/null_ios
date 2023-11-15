import React, { useEffect, useState } from "react";
import QuizChoiceButton from "components/atoms/Buttons/QuizChoiceButton";
import { IQuizGame } from "types/quizzes/quizGameType";
import { quizState } from "types/quizzes/quizTypes";
import { getWindowRatio } from "components/utils";

interface IQuizChoices {
  choices: string[];
  solvedCallback: IQuizGame["solvedCallback"];
  answer: string;
}
enum ANSWERS {
  "A",
  "B",
  "C",
  "D",
}
const { heightRatio } = getWindowRatio();
const BUTTON_HEIGHT_TWO_ELEMENTS = 120 * heightRatio;
const BUTTON_HEIGHT_FOUR_ELEMENTS = 60 * heightRatio;
const SOLVED_CALLBACK_DELAY = 0;
const QuizChoices = ({ choices, solvedCallback, answer }: IQuizChoices) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(null);
  useEffect(() => {
    // reset state when quiz Changed
    setSelectedIndex(null);
  }, [choices]);

  const onChoice = (index) => {
    if (selectedIndex !== null) return; // prevent change after select choice
    const state: quizState =
      ANSWERS[index] === answer ? quizState.solved : quizState.wrong;
    setSelectedIndex(index);
    setTimeout(() => {
      solvedCallback(state);
    }, SOLVED_CALLBACK_DELAY);
  };

  return (
    <>
      {choices.map((choice, index) => (
        <QuizChoiceButton
          key={choice}
          onPress={() => onChoice(index)}
          height={
            choices.length === 2
              ? BUTTON_HEIGHT_TWO_ELEMENTS
              : BUTTON_HEIGHT_FOUR_ELEMENTS
          }
          choiceText={choice}
          index={index}
          selectedIndex={selectedIndex}
          answer={ANSWERS[answer]}
        ></QuizChoiceButton>
      ))}
    </>
  );
};

export default QuizChoices;
