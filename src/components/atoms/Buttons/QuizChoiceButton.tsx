import React from "react";
import BaseButton, { IBaseButton } from "./BaseButton";
import styled, { useTheme } from "styled-components";
import RevolvingText from "components/molecules/Texts/RevolvingText";
import { getWindowSize } from "components/utils";
import BaseView from "../View/BaseView";

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
  padding: 20px;
  overflow: hidden;
`;
const TextContainer = styled(BaseView)`
  overflow: hidden;
  width: 100%;
  align-items: start;
  background-color: transparent;
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
  const { width } = getWindowSize();
  const theme = useTheme();
  return (
    <Btn state={state} {...props}>
      <TextContainer>
        <RevolvingText
          text={choiceText}
          fontSize="small"
          fontStyle={{
            color:
              state === quizBtnState.correct || state === quizBtnState.wrong
                ? "black"
                : theme.questionTextColor,
          }}
          containerWidth={Math.ceil(width * 0.9) - 40}
        />
      </TextContainer>
    </Btn>
  );
};

export default QuizChoiceButton;
