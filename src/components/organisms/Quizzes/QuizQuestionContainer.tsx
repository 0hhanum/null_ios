import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";
import styled from "styled-components/native";
import { IQuiz } from "types/quizzes/quizTypes";
import BaseView from "components/atoms/View/BaseView";

const Container = styled(BaseView)`
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
`;

const QuestionContainer = ({ question }: { question: IQuiz["question"] }) => {
  return (
    <Container>
      <QuizQuestionCard question={question} />
    </Container>
  );
};
export default QuestionContainer;
