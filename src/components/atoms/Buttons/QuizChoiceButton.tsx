import React from "react";
import BaseButton, { IBaseButton } from "./BaseButton";
import styled from "styled-components";
import BaseText from "../Texts/BaseText";

export enum quizBtnState {
  "correct",
  "wrong",
  "default",
}
interface IQuizChoiceButton extends IBaseButton {
  answer: number;
  index: number;
  selectedIndex: number;
  choiceText: string;
}
const Btn = styled(BaseButton)<{ state: quizBtnState }>`
  border: 0.2px;
  border-color: ${(props) =>
    props.state === quizBtnState.correct
      ? props.theme.green
      : props.state === quizBtnState.wrong
      ? props.theme.warning
      : props.theme.textColor};
  background-color: ${(props) =>
    props.state === quizBtnState.correct
      ? props.theme.green
      : props.state === quizBtnState.wrong
      ? props.theme.warning
      : props.theme.bgColor};
  border-radius: 50px;
  margin-bottom: 15px;
`;
const BtnText = styled(BaseText)<{ state: quizBtnState }>`
  color: ${(props) =>
    props.state === quizBtnState.correct || props.state === quizBtnState.wrong
      ? "black"
      : "white"};
`;
const QuizChoiceButton = ({
  index,
  selectedIndex,
  choiceText,
  answer,
  children,
  ...props
}: IQuizChoiceButton) => {
  const state =
    index !== selectedIndex
      ? quizBtnState.default
      : answer === index
      ? quizBtnState.correct
      : quizBtnState.wrong;
  return (
    <Btn state={state} {...props} style={{ padding: 20 }}>
      <BtnText state={state} size="small">
        {choiceText}
      </BtnText>
    </Btn>
  );
};

export default QuizChoiceButton;
