import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import QuizCard from "components/molecules/Cards/Quizzes/QuizCard";
import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getQuizSelector } from "recoil/firebases/quizzes/selector";
import { localQuizDataAtom } from "recoil/quizzes/atom";
import styled from "styled-components/native";
import { category } from "types/quizzes/quizTypes";

interface IQuizListComponent {
  category: category;
}

const QuizList = styled.FlatList`
  margin-vertical: 15px;
`;
const QuizListComponent = ({ category }: IQuizListComponent) => {
  const quizzes = useRecoilValueLoadable(getQuizSelector(category));
  const localQuizzes = useRecoilValue(localQuizDataAtom);
  if (quizzes.state === "hasValue") {
    return (
      <QuizList
        data={quizzes.contents}
        renderItem={({ item: quiz, index }) => (
          <QuizCard
            title={quiz.title}
            tags={quiz.tags}
            key={quiz.id}
            id={quiz.id}
            category={category}
            isBookmarked={
              localQuizzes.bookmarks.hasOwnProperty(quiz.id)
                ? localQuizzes.bookmarks[quiz.id].isBookmarked
                : quiz.isBookmarked
            }
            state={
              localQuizzes.quizzes.hasOwnProperty(quiz.id)
                ? localQuizzes.quizzes[quiz.id].state
                : quiz.state
            }
          />
        )}
      />
    );
  } else if (quizzes.state === "loading") {
    // loading
    return null;
  } else {
    // error
    return (
      <BaseView>
        <BaseText>SOMETHING GOES WRONG !</BaseText>
      </BaseView>
    );
  }
};

export default QuizListComponent;
