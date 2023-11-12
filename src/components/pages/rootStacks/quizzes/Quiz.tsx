import React, { useEffect, useState } from "react";
import PageLayout from "../../../atoms/View/PageLayout";
import { NavigationProp } from "@react-navigation/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";
import QuizSolvedPopup from "components/organisms/Quizzes/QuizSolvedPopup";
import QuizGameComponent from "components/organisms/Quizzes/Games/QuizGameComponent";
import { changeQuizStateUserData } from "firebases/databases/quizzes";
import { getDatabase, ref } from "firebase/database";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userUidAtom } from "recoil/auths/atom";
import { setLocalQuizStateSelector } from "recoil/quizzes/selector";

interface IQuizPage {
  route: {
    params: {
      quizzes: IQuiz[];
    };
  };
  navigation: NavigationProp<any>;
}

const Quiz = ({
  route: {
    params: { quizzes },
  },
  navigation,
}: IQuizPage) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [solvedState, setSolvedState] = useState<quizState>(null);
  const setLocalQuizData = useSetRecoilState(setLocalQuizStateSelector);
  const userId = useRecoilValue(userUidAtom);
  useEffect(() => {
    if (currentQuizIndex === quizzes.length) {
      // solved all quizzes
      navigation.goBack();
    }
  }, [currentQuizIndex]);
  const currentQuiz = quizzes[currentQuizIndex];
  const solvedCallback = (state: quizState) => {
    const dbRef = ref(getDatabase());
    // firebase save
    changeQuizStateUserData(dbRef, currentQuiz.id, userId, state);
    // local data save
    setLocalQuizData({
      quizId: currentQuiz.id,
      state,
    });
    setSolvedState(state);
  };
  const solvedPopupConfirmCallback = () => {
    setCurrentQuizIndex((curr) => curr + 1);
    setSolvedState(null);
  };
  return currentQuiz !== undefined ? (
    <PageLayout>
      <QuizGameComponent
        type={currentQuiz.questionType}
        solvedCallback={solvedCallback}
        quiz={currentQuiz}
      />
      {solvedState && (
        <QuizSolvedPopup
          solvedState={solvedState}
          solvedPopupConfirmCallback={solvedPopupConfirmCallback}
          description={currentQuiz.description}
          isBookmarked={currentQuiz.isBookmarked}
          quizId={currentQuiz.id}
        />
      )}
    </PageLayout>
  ) : null;
};

export default Quiz;
