import React from "react";
import BaseButton, { IBaseButton } from "./BaseButton";
import styled from "styled-components";

export enum quizBtnState {
  "correct",
  "wrong",
}
interface IQuizChoiceButton extends IBaseButton {
  state: quizBtnState;
}
const Btn = styled(BaseButton)<{ state: quizBtnState }>`
  border: 0.2px;
  border-color: ${(props) =>
    props.state === quizBtnState.correct
      ? props.theme.questionTextColor
      : props.state === quizBtnState.wrong
      ? props.theme.warning
      : props.theme.textColor};
  background-color: ${(props) =>
    props.state === quizBtnState.correct
      ? props.theme.questionTextColor
      : props.state === quizBtnState.wrong
      ? props.theme.warning
      : props.theme.bgColor};
  border-radius: 5px;
  margin-bottom: 10px;
`;
const QuizChoiceButton = ({ children, state, ...props }: IQuizChoiceButton) => {
  return (
    <Btn state={state} {...props}>
      {children}
    </Btn>
  );
};

export default QuizChoiceButton;
