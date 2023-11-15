import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import { getWindowSize } from "components/utils";
import React, { useState } from "react";
import styled from "styled-components/native";
import { IQuizGame } from "types/quizzes/quizGameType";
import Keyboard from "./Keyboard";
import { quizState } from "types/quizzes/quizTypes";

interface ISubjectiveQuizAnswerInput {
  solvedCallback: IQuizGame["solvedCallback"];
  answer: string;
}
const LARGE_TEXT_THRESHOLD = 800;
const Container = styled(BaseView)`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const InputTextContainer = styled(BaseView)`
  flex: 0.15;
  width: 105%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
const InputText = styled(BaseText)``;

const AnswerSection = ({
  solvedCallback,
  answer,
}: ISubjectiveQuizAnswerInput) => {
  const [inputText, setInputText] = useState("");
  const { height } = getWindowSize();
  const onSubmit = () => {
    if (inputText === answer) {
      solvedCallback(quizState.solved);
    } else {
      solvedCallback(quizState.wrong);
    }
  };
  return (
    <Container>
      <InputTextContainer>
        <InputText size={height > LARGE_TEXT_THRESHOLD ? "large" : "medium"}>
          {inputText}
        </InputText>
      </InputTextContainer>
      <Keyboard
        answer={answer}
        setAnswerInput={setInputText}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default AnswerSection;
