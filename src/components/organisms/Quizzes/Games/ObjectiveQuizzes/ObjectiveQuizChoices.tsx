import React from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import { answerEnum, quizState } from "types/quizzes/quizTypes";
import QuizChoices from "../QuizChoices";

interface IObjectiveQuizChoices {
  choices: string[];
  solvedCallback: IQuizGame["solvedCallback"];
  answer: string;
}
const ObjectiveQuizChoices = ({
  choices,
  solvedCallback,
  answer,
}: IObjectiveQuizChoices) => {
  const answerIndex = answerEnum[answer];
  const answerText = choices[answerIndex];
  const onChoice = (index: number) => {
    const state: quizState =
      index === answerIndex ? quizState.solved : quizState.wrong;
    setTimeout(() => {
      solvedCallback(state);
    }, 0); // execute callback after color effect
  };

  return (
    <QuizChoices onChoice={onChoice} answer={answerText} choices={choices} />
  );
};

export default ObjectiveQuizChoices;
