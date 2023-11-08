import React, { useEffect, useState } from "react";
import QuizChoiceButton from "components/atoms/Buttons/QuizChoiceButton";
import { IQuizGame } from "types/quizzes/quizGameType";
import { quizState } from "types/quizzes/quizTypes";

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
const BUTTON_SIZE_TWO_ELEMENTS = 120;
const BUTTON_SIZE_FOUR_ELEMENTS = 60;
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
          key={index}
          onPress={() => onChoice(index)}
          height={
            choices.length === 2
              ? BUTTON_SIZE_TWO_ELEMENTS
              : BUTTON_SIZE_FOUR_ELEMENTS
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
