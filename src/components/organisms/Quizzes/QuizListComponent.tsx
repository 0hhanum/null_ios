import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import CenterView from "components/atoms/View/CenterView";
import QuizCard from "components/molecules/Cards/Quizzes/QuizCard";
import MainLogo from "components/molecules/logos/MainLogo";
import React from "react";
import { RecoilValueReadOnly, useRecoilValueLoadable } from "recoil";
import styled from "styled-components/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";

interface IQuizListComponent {
  onPlay: (quizzes: IQuiz[], selectedQuizIndex: number) => void;
  selector: RecoilValueReadOnly<IQuiz[]>;
  placeholder?: string;
  newQuizId?: string;
}

const QuizList = styled.FlatList`
  margin-vertical: 15px;
`;

const QuizListComponent = ({
  onPlay,
  selector,
  placeholder,
  newQuizId,
}: IQuizListComponent) => {
  const quizzes = useRecoilValueLoadable(selector);
  const startQuiz = (selectedQuizIndex: number) => {
    if (quizzes.state !== "hasValue") return;
    onPlay(quizzes.contents, selectedQuizIndex);
  };
  if (quizzes.state === "hasValue") {
    if (quizzes.contents.length != 0) {
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
              isNewQuiz={newQuizId === id}
              isSkeletonUI={false}
            />
          )}
        />
      );
    } else {
      // 리스트 비었을 시
      return (
        <CenterView style={{ flex: 1 }}>
          <MainLogo />
          {placeholder && (
            <BaseText style={{ marginTop: 30 }}>{placeholder}</BaseText>
          )}
        </CenterView>
      );
    }
  } else if (quizzes.state === "loading") {
    // loading (render skeleton UI)
    return (
      <QuizList
        data={new Array(5).fill(undefined)}
        renderItem={({ _, index }) => (
          <QuizCard
            title={""}
            tags={[]}
            key={index}
            id={index}
            isBookmarked={false}
            state={quizState.pending}
            onPress={() => {}}
            isSkeletonUI={true}
            isNewQuiz={false}
          />
        )}
      />
    );
  } else {
    // error
    return (
      <BaseView>
        <BaseText>문제가 발생했습니다.</BaseText>
      </BaseView>
    );
  }
};

export default QuizListComponent;
