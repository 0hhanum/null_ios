import React from "react";
import styled from "styled-components/native";
import VCenterView from "components/atoms/View/VCenterView";
import TrafficLight from "components/molecules/TrafficLights/TrafficLight";
import { getWindowSize } from "components/utils";
import QuestionText from "components/molecules/Texts/quizzes/QuestionText";
import { useNavigation } from "@react-navigation/native";

interface IQuizQuestionCard {
  question: string[];
}
const Container = styled(VCenterView)`
  width: ${(props) => `${Math.floor(props.theme.width)}px`};
  height: ${(props) => `${Math.floor(props.theme.height * 0.5)}px`};
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
  border-radius: 10px;
  overflow: hidden;
`;

const QuizQuestionCard = ({ question }: IQuizQuestionCard) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollContainer>
        {question.map((text, index) => (
          <TextContainer key={index}>
            <QuestionText text={text} />
          </TextContainer>
        ))}
      </ScrollContainer>
      <TrafficLightContainer onPress={() => navigation.goBack()}>
        <TrafficLight />
      </TrafficLightContainer>
    </Container>
  );
};

export default QuizQuestionCard;
