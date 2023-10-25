import { useNavigation } from "@react-navigation/native";
import CancelButton from "components/atoms/Buttons/CancelButton";
import QuizPlayButton from "components/molecules/Buttons/Quizzes/QuizPlayButton";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;
const QuizListBottomBar = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <Container>
      <QuizPlayButton />
      <CancelButton size={70} onPress={goBack} />
    </Container>
  );
};

export default QuizListBottomBar;
