import React from "react";
import styled from "styled-components/native";
import { quizState } from "types/quizzes/quizTypes";
import BaseView, { IBaseView } from "../View/BaseView";
import BaseText from "../Texts/BaseText";
import { capitalizeFirstLetter } from "components/utils";

interface IQuizState {
  state: quizState;
}
interface IQuizStateBadge extends IQuizState {
  style?: React.CSSProperties;
}
const Container = styled(BaseView)<IQuizState>`
  width: 62px;
  padding-vertical: 2px;
  background-color: ${(props) =>
    props.state === "pending"
      ? "#102C57"
      : props.state === "solved"
      ? "green"
      : props.theme.warning};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
const State = styled(BaseText)<IQuizState>``;

const QuizStateBadge = ({ state, style }: IQuizStateBadge) => {
  return (
    <Container style={style} state={state}>
      <State state={state} size={12}>
        {capitalizeFirstLetter(state)}
      </State>
    </Container>
  );
};

export default QuizStateBadge;
