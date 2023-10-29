import React from "react";
import PageLayout from "../../../atoms/View/PageLayout";
import Widget from "components/molecules/Widgets/Widget";
import BaseView from "components/atoms/View/BaseView";
import QuizListBottomBar from "components/organisms/Quizzes/QuizListBottomBar";
import QuizListComponent from "components/organisms/Quizzes/QuizListComponent";

const QuizList = ({
  route: {
    params: { category },
  },
}) => {
  return (
    <PageLayout>
      <Widget category={category} cardType="banner" />
      <BaseView style={{ flex: 1 }}>
        <QuizListComponent category={category} />
      </BaseView>
      <QuizListBottomBar category={category} />
    </PageLayout>
  );
};

export default QuizList;
