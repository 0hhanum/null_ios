import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import { useRecoilValueLoadable } from "recoil";
import { quizSelector } from "recoil/quizzes/selector";

const Quiz = ({
  route: {
    params: { category },
  },
}) => {
  const quizzes = useRecoilValueLoadable(quizSelector(category));
  console.log(quizzes.state);
  return <PageLayout></PageLayout>;
};

export default Quiz;
