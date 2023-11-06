import React, { useEffect, useState } from "react";
import QuizChoiceButton, {
  quizBtnState,
} from "components/atoms/Buttons/QuizChoiceButton";
import { IQuizGame } from "types/quizzes/quizGameType";
import { quizState } from "types/quizzes/quizTypes";

interface IQuizChoices {
  choices: string[];
  solvedCallback: IQuizGame["solvedCallback"];
  answer: string;
}
const ANSWERS = ["A", "B", "C", "D"];
const BUTTON_SIZE_TWO_ELEMENTS = 120;
const BUTTON_SIZE_FOUR_ELEMENTS = 60;
const SOLVED_CALLBACK_DELAY = 250;

const QuizChoices = ({ choices, solvedCallback, answer }: IQuizChoices) => {
  const [answerState, setAnswerState] = useState<[number, quizBtnState]>([
    -1,
    null,
  ]);
  useEffect(() => {
    // reset state
    setAnswerState([-1, null]);
  }, [choices]);

  const onChoice = (index) => {
    if (answerState[0] !== -1) return; // prevent change after select choice
    let state: quizState;
    if (ANSWERS[index] === answer) {
      setAnswerState([index, quizBtnState.correct]);
      state = "solved";
    } else {
      setAnswerState([index, quizBtnState.wrong]);
      state = "wrong";
    }
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
          state={answerState[0] === index ? answerState[1] : null}
          height={
            choices.length === 2
              ? BUTTON_SIZE_TWO_ELEMENTS
              : BUTTON_SIZE_FOUR_ELEMENTS
          }
          choice={choice}
        ></QuizChoiceButton>
      ))}
    </>
  );
};

export default QuizChoices;
