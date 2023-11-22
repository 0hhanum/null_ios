import { useNavigation } from "@react-navigation/native";
import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import QuizCard from "components/molecules/Cards/Quizzes/QuizCard";
import React from "react";
import { RecoilValueReadOnly, useRecoilValueLoadable } from "recoil";
import { quizzesSelectorByCategory } from "recoil/firebases/quizzes/selector";
import styled from "styled-components/native";
import { IQuiz, category, quizState } from "types/quizzes/quizTypes";

interface IQuizListComponent {
  onPlay: (quizzes: IQuiz[], selectedQuizIndex: number) => void;
  selector: RecoilValueReadOnly<IQuiz[]>;
}

const QuizList = styled.FlatList`
  margin-vertical: 15px;
`;

const QuizListComponent = ({ onPlay, selector }: IQuizListComponent) => {
  const quizzes = useRecoilValueLoadable(selector);
  const startQuiz = (selectedQuizIndex: number) => {
    if (quizzes.state !== "hasValue") return;
    onPlay(quizzes.contents, selectedQuizIndex);
  };
  if (quizzes.state === "hasValue") {
    return (
      <QuizList
        data={quizzes.contents}
        renderItem={({
          item: { title, tags, id, isBookmarked, state },
          index,
        }) => (
          <QuizCard
            title={title}
            tags={tags}
            key={id}
            id={id}
            isBookmarked={isBookmarked}
            state={state}
            onPress={() => startQuiz(index)}
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
