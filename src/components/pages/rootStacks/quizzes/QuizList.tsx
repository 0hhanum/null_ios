import React from "react";
import PageLayout from "../../../atoms/View/PageLayout";
import { useRecoilValueLoadable } from "recoil";
import { quizSelector } from "recoil/quizzes/selector";
import BaseText from "components/atoms/Texts/BaseText";
import { Pressable } from "react-native";
import Widget from "components/molecules/Widgets/Widget";

const QuizList = ({
  route: {
    params: { category },
  },
  navigation,
}) => {
  return (
    <PageLayout>
      <Widget category={category} cardType="banner" />
    </PageLayout>
  );
  const quizzes = useRecoilValueLoadable(quizSelector(category));
  console.log(quizzes.state);
  if (quizzes.state === "hasValue") {
    return (
      <PageLayout>
        {quizzes.contents.map((quiz) => (
          <BaseText key={quiz.title}>{quiz.title}</BaseText>
        ))}
        <Pressable
          onPress={() => {
            navigation.navigate("Quiz", {
              category,
            });
          }}
        >
          <BaseText>PRess e</BaseText>
        </Pressable>
      </PageLayout>
    );
  } else {
    return;
  }
};

export default QuizList;
