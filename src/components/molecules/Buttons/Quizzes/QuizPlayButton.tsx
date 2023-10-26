import BaseButton, { IBaseButton } from "components/atoms/Buttons/BaseButton";
import GradientCard from "components/atoms/Quizzes/GradientCard";
import React from "react";
import styled from "styled-components/native";
import Shimmer from "react-native-shimmer";

const GRADIENT_COLORS = [
  "#ACD15E",
  "#FF9246",
  "#F45343",
  "#9575B3",
  "#ACD15E",
  "#FF9246",
  "#F45343",
  "#9575B3",
];
const Btn = styled(BaseButton)`
  flex: 1;
  margin-right: 10px;
  height: 70px;
`;
const TextContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const PlayText = styled.Text`
  font-size: 36px;
  font-weight: 700;
`;
const QuizPlayButton = ({ onPress }: IBaseButton) => {
  return (
    <Btn onPress={onPress}>
      <>
        <GradientCard colors={GRADIENT_COLORS} />
        <TextContainer>
          <Shimmer>
            <PlayText>play();</PlayText>
          </Shimmer>
        </TextContainer>
      </>
    </Btn>
  );
};

export default QuizPlayButton;
