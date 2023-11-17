import BaseView from "components/atoms/View/BaseView";
import React from "react";
import { IQuizGame } from "types/quizzes/quizGameType";
import styled from "styled-components/native";
import ObjectiveQuizChoices from "components/organisms/Quizzes/Games/ObjectiveQuizzes/ObjectiveQuizChoices";
import QuizQuestionCard from "components/molecules/Cards/Quizzes/QuizQuestionCard";
import QuestionTexts from "components/molecules/Texts/quizzes/QuestionTexts";

const ChoicesContainer = styled(BaseView)`
  margin-top: ${(props) => `${50 * props.theme.heightRatio}px`};
`;
const ObjectiveQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  return (
    <>
      <QuizQuestionCard
        QuestionTextComponent={<QuestionTexts question={quiz.question} />}
      />
      <ChoicesContainer>
        <ObjectiveQuizChoices
          solvedCallback={solvedCallback}
          choices={quiz.choices as string[]}
          answer={quiz.answer[0]}
        />
      </ChoicesContainer>
    </>
  );
};

export default ObjectiveQuiz;
