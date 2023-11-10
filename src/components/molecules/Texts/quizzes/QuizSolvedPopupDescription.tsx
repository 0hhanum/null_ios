import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";

const WRONG_MESSAGE = "정답이 아니에요 😢";
const CORRECT_MESSAGE = "정답입니다! 👍";

const Container = styled(BaseView)`
  background-color: ${(props) => props.theme.headerColor};
  margin-top: 70px;
  width: 90%;
  flex: 2.5;
`;

const DescriptionText = styled(BaseText)`
  margin-bottom: 10px;
`;
const SolvedMessage = styled(BaseText)`
  margin-bottom: 25px;
  text-align: center;
`;

const QuizSolvedPopupDescription = ({
  state,
  description,
}: Pick<IQuiz, "state" | "description">) => {
  const message = state === quizState.wrong ? WRONG_MESSAGE : CORRECT_MESSAGE;

  return (
    <Container>
      <ScrollView>
        <SolvedMessage>{message}</SolvedMessage>
        {description.map((desc, index) => (
          <DescriptionText size="small" key={index}>
            • {desc}
          </DescriptionText>
        ))}
      </ScrollView>
    </Container>
  );
};

export default QuizSolvedPopupDescription;
