import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import { quizzesSelectorByBookmarked } from "recoil/firebases/quizzes/selector";
import BaseView from "components/atoms/View/BaseView";
import QuizListComponent from "components/organisms/Quizzes/QuizListComponent";
import { useNavigation } from "@react-navigation/native";
import { IQuiz } from "types/quizzes/quizTypes";

const Bookmark = () => {
  const navigation = useNavigation<any>();
  const selector = quizzesSelectorByBookmarked;
  const onPlay = (quizzes: IQuiz[], selectedQuizIndex: number) => {
    const selectedQuiz = quizzes[selectedQuizIndex];
    const pendingQuizzes = quizzes.slice(selectedQuizIndex + 1);
    const newQuizzes = [selectedQuiz, ...pendingQuizzes];
    navigation.navigate("RootStackNav", {
      screen: "Quiz",
      params: {
        quizzes: newQuizzes,
      },
    });
  };
  return (
    <PageLayout>
      <BaseView style={{ flex: 1 }}>
        <QuizListComponent selector={selector} onPlay={onPlay} />
      </BaseView>
    </PageLayout>
  );
};

export default Bookmark;
