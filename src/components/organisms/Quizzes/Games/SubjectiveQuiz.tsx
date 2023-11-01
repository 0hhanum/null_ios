import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import React from "react";
import { Pressable } from "react-native";
import { IQuizGame } from "types/quizzes/quizGameType";

const SubjectiveQuiz = ({ quiz, solvedCallback }: IQuizGame) => {
  return (
    <BaseView>
      <Pressable onPress={() => solvedCallback("solved")}>
        <BaseText size={100}>{quiz.question}</BaseText>
      </Pressable>
    </BaseView>
  );
};

export default SubjectiveQuiz;
