import KeyboardKey from "components/atoms/Quizzes/SubjectiveQuizzes/KeyboardKey";
import BaseView from "components/atoms/View/BaseView";
import React, { useMemo } from "react";
import styled from "styled-components/native";
import { getRandomLetters } from "./utils";

interface IKeyboard {
  answer: string;
  setAnswerInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const Container = styled(BaseView)`
  padding: ${(props) => `${props.theme.heightRatio * 25}px`};
  border: 0.8px;
  border-color: ${(props) => props.theme.textColor};
  border-radius: 20px;
  width: 105%;
  flex: 0.8;
  justify-content: space-between;
  min-height: 110px;
  margin-bottom: 5px;
`;
const Row = styled(BaseView)`
  flex-direction: row;
  justify-content: space-between;
`;

const FIRST_ROW_KEY_INDEX = 6;
const SECOND_ROW_KEY_INDEX = FIRST_ROW_KEY_INDEX + 5;
const THIRD_ROW_KEY_INDEX = SECOND_ROW_KEY_INDEX + 5;
const FOURTH_ROW_KEY_INDEX = THIRD_ROW_KEY_INDEX + 5;

const Keyboard = ({ answer, setAnswerInput, onSubmit }: IKeyboard) => {
  const randomLetters = useMemo(() => getRandomLetters(answer), []);
  const typeKeyboard = (text: string) => {
    setAnswerInput((curr) => curr + text);
  };
  const backspace = () => {
    setAnswerInput((curr) => curr.slice(0, curr.length - 1));
  };
  const reset = () => {
    setAnswerInput("");
  };
  const generateKeyboardKeys = (start: number, end: number) => {
    return randomLetters
      .slice(start, end)
      .map((letter) => (
        <KeyboardKey
          text={letter}
          onPress={typeKeyboard}
          key={`${letter}_${Math.random()}`}
        />
      ));
  };
  return (
    <Container>
      <Row>{generateKeyboardKeys(0, FIRST_ROW_KEY_INDEX)}</Row>
      <Row>
        {generateKeyboardKeys(FIRST_ROW_KEY_INDEX, SECOND_ROW_KEY_INDEX)}
        <KeyboardKey icon="reload1" onPress={reset} />
      </Row>
      <Row>
        {generateKeyboardKeys(SECOND_ROW_KEY_INDEX, THIRD_ROW_KEY_INDEX)}
        <KeyboardKey icon="arrowleft" onPress={backspace} />
      </Row>
      <Row>
        {generateKeyboardKeys(THIRD_ROW_KEY_INDEX, FOURTH_ROW_KEY_INDEX)}
        <KeyboardKey icon="enter" onPress={onSubmit} />
      </Row>
    </Container>
  );
};

export default Keyboard;
