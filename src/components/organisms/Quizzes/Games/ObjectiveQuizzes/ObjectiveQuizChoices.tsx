import React from "react";
import QuizChoiceButton from "components/atoms/Buttons/QuizChoiceButton";
import { IQuizGame } from "types/quizzes/quizGameType";
import { quizState } from "types/quizzes/quizTypes";
import { getWindowRatio } from "components/utils";

interface IObjectiveQuizChoices {
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
const ObjectiveQuizChoices = ({
  choices,
  solvedCallback,
  answer,
}: IObjectiveQuizChoices) => {
  const answerIndex = ANSWERS[answer];

  const onChoice = (index) => {
    const state: quizState =
      ANSWERS[index] === answer ? quizState.solved : quizState.wrong;
    setTimeout(() => {
      solvedCallback(state);
    }, 0); // execute callback after color effect
  };

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
          answer={choices[answerIndex]}
        ></QuizChoiceButton>
      ))}
    </>
  );
};

export default ObjectiveQuizChoices;
