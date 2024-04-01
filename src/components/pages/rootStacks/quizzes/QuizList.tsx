import React from "react";
import PageLayout from "../../../atoms/View/PageLayout";
import Widget from "components/molecules/Widgets/Widget";
import BaseView from "components/atoms/View/BaseView";
import QuizListBottomBar from "components/organisms/Quizzes/QuizListBottomBar";
import QuizListComponent from "components/organisms/Quizzes/QuizListComponent";
import { IQuiz, quizState } from "types/quizzes/quizTypes";
import { useNavigation } from "@react-navigation/native";
import { quizzesSelectorByCategory } from "recoil/firebases/quizzes/selector";

const QuizList = ({
  route: {
    params: { category, newQuizId },
  },
}) => {
  const navigation = useNavigation<any>();
  const onAutoPlay = (quizzes: IQuiz[]) => {
    const pendingQuizzes = quizzes.filter(
      (quiz: IQuiz) => quiz.state !== quizState.solved
    );
    navigation.navigate("Quiz", {
      quizzes: pendingQuizzes.length !== 0 ? pendingQuizzes : quizzes,
    });
  };
  const onSelectedPlay = (quizzes: IQuiz[], selectedQuizIndex: number) => {
    const selectedQuiz = quizzes[selectedQuizIndex];
    const pendingQuizzes = quizzes
      .slice(selectedQuizIndex + 1)
      .filter((quiz: IQuiz) => quiz.state !== quizState.solved);
    const newQuizzes = [selectedQuiz, ...pendingQuizzes];
    navigation.navigate("Quiz", {
      quizzes: newQuizzes,
    });
  };
  const quizzesByCategorySelector = quizzesSelectorByCategory(category);
  return (
    <PageLayout>
      <Widget category={category} cardType="banner" />
      <BaseView style={{ flex: 1 }}>
        <QuizListComponent
          selector={quizzesByCategorySelector}
          onPlay={onSelectedPlay}
          newQuizId={newQuizId}
        />
      </BaseView>
      <QuizListBottomBar
        onPlay={onAutoPlay}
        selector={quizzesByCategorySelector}
      />
    </PageLayout>
  );
};

export default QuizList;
