import React from "react";
import styled from "styled-components/native";
import VCenterView from "components/atoms/View/VCenterView";
import TrafficLight from "components/molecules/TrafficLights/TrafficLight";
import { useNavigation } from "@react-navigation/native";
import BaseView from "components/atoms/View/BaseView";

interface IQuizQuestionCard {
  QuestionTextComponent: React.JSX.Element;
}
const Container = styled(BaseView)`
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
`;

const CardContainer = styled(VCenterView)`
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

const QuizQuestionCard = ({ QuestionTextComponent }: IQuizQuestionCard) => {
  const navigation = useNavigation();
  return (
    <Container>
      <CardContainer>
        <ScrollContainer>{QuestionTextComponent}</ScrollContainer>
        <TrafficLightContainer onPress={() => navigation.goBack()}>
          <TrafficLight />
        </TrafficLightContainer>
      </CardContainer>
    </Container>
  );
};

export default QuizQuestionCard;
