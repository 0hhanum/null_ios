import React from "react";
import styled from "styled-components/native";
import VCenterView from "components/atoms/View/VCenterView";
import TrafficLight from "components/molecules/TrafficLights/TrafficLight";
import { getWindowSize } from "components/utils";
import QuestionText from "components/molecules/Texts/quizzes/QuestionText";

interface IQuizQuestionCard {
  question: string[];
}
const Container = styled(VCenterView)`
  width: ${(props) => `${Math.floor(props.width)}px`};
  height: ${(props) => `${Math.floor(props.width * 1.1)}px`};
  background-color: ${(props) => props.theme.headerColor};
  border-radius: 40px;
  padding: 20px;
`;
const ScrollContainer = styled.ScrollView`
  margin-top: 40px;
`;
const TrafficLightContainer = styled.Pressable`
  position: absolute;
  top: 22px;
  left: 22px;
`;
const TextContainer = styled.View`
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
`;

const QuizQuestionCard = ({ question }: IQuizQuestionCard) => {
  const { width } = getWindowSize();
  return (
    <Container width={width}>
      <ScrollContainer>
        {question.map((text, index) => (
          <TextContainer key={index}>
            <QuestionText text={text} />
          </TextContainer>
        ))}
      </ScrollContainer>
      <TrafficLightContainer onPress={() => {}}>
        <TrafficLight />
      </TrafficLightContainer>
    </Container>
  );
};

export default QuizQuestionCard;