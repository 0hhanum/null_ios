import React from "react";
import BaseButton, { IBaseButton } from "./BaseButton";
import styled from "styled-components";
import BaseText from "../Texts/BaseText";

export enum quizBtnState {
  "correct",
  "wrong",
}
interface IQuizChoiceButton extends IBaseButton {
  state: quizBtnState;
  choice: string;
}
const Btn = styled(BaseButton)<{ state: quizBtnState }>`
  border: 0.5px;
  border-color: ${(props) => props.theme.textColor};
  background-color: ${(props) =>
    props.state === quizBtnState.correct
      ? props.theme.green
      : props.state === quizBtnState.wrong
      ? props.theme.warning
      : props.theme.bgColor};
  border-radius: 5px;
  margin-bottom: 10px;
`;
const QuizChoiceButton = ({
  children,
  state,
  choice,
  ...props
}: IQuizChoiceButton) => {
  return (
    <Btn state={state} {...props} style={{ padding: 20 }}>
      <BaseText size="small">{choice}</BaseText>
    </Btn>
  );
};

export default QuizChoiceButton;
