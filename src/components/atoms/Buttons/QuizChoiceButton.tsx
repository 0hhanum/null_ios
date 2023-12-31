import React, { useState } from "react";
import BaseButton, { IBaseButton } from "./BaseButton";
import styled, { useTheme } from "styled-components";
import RevolvingText from "components/molecules/Texts/RevolvingText";
import { getWindowSize } from "components/utils";
import BaseView from "../View/BaseView";
import { quizState } from "types/quizzes/quizTypes";
import { getQuizChoiceBtnColor } from "./util";

interface IQuizChoiceButton extends IBaseButton {
  answer: string;
  choiceText: string;
  onChoice: () => void;
}
const Btn = styled(BaseButton)<{ state: quizState }>`
  border-width: 0.8px;
  border-style: solid;
  border-color: ${(props) => getQuizChoiceBtnColor(props.state, "border")};
  background-color: ${(props) =>
    getQuizChoiceBtnColor(props.state, "background")};
  border-radius: 50px;
  margin-bottom: 15px;
  padding-horizontal: 20px;
  padding-vertical: ${(props) => `${props.theme.heightRatio * 12}px`};
  overflow: hidden;
`;
const TextContainer = styled(BaseView)`
  overflow: hidden;
  width: 100%;
  align-items: start;
  background-color: transparent;
  border: none;
`;
const QuizChoiceButton = ({
  choiceText,
  answer,
  onChoice,
  ...props
}: IQuizChoiceButton) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);
  const state: quizState = selected
    ? choiceText === answer
      ? quizState.solved
      : quizState.wrong
    : null;
  const fontColor = state === null ? theme.questionTextColor : "black";
  const { width } = getWindowSize();
  const onPress = () => {
    setSelected(true);
    onChoice();
  };
  return (
    <Btn state={state} onPress={onPress} {...props}>
      <TextContainer>
        <RevolvingText
          text={choiceText}
          fontSize="small"
          fontStyle={{
            color: fontColor,
          }}
          containerWidth={width * 0.9 - 40}
        />
      </TextContainer>
    </Btn>
  );
};

export default QuizChoiceButton;
