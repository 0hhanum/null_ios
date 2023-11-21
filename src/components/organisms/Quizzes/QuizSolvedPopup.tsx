import BaseView from "components/atoms/View/BaseView";
import BookmarkBtn from "components/molecules/Cards/Quizzes/BookmarkBtn";
import BaseCardModal from "components/molecules/Modals/BaseCardModal";
import React, { useState } from "react";
import styled from "styled-components/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";
import QuizAnswerDetailModal from "./QuizAnswerDetailModal";
import QuizSolvedPopupDescription from "components/molecules/Texts/quizzes/QuizSolvedPopupDescription";
import QuizSolvedPopupButtons from "components/molecules/Buttons/Quizzes/QuizSolvedPopupButtons";
import { useTheme } from "styled-components";

interface QuizSolvedPopup {
  solvedPopupConfirmCallback: () => void;
  solvedState: quizState;
  description: IQuiz["description"];
  quizId: IQuiz["id"];
  isBookmarked: IQuiz["isBookmarked"];
}

const BookmarkContainer = styled(BaseView)`
  position: absolute;
  top: 2px;
  right: 45px;
  z-index: 2;
  background-color: transparent;
`;

const QuizSolvedPopup = ({
  solvedState,
  solvedPopupConfirmCallback,
  description,
  quizId,
  isBookmarked,
}: QuizSolvedPopup) => {
  const theme = useTheme();
  const [popupToggle, setPopupToggle] = useState(true);
  const showAnswerDetail = () => {
    setPopupToggle(false);
  };
  return (
    <>
      <BaseCardModal
        visible={popupToggle}
        setVisible={(visible) => setPopupToggle(visible)}
        height="70%"
        cardStyle={{
          shadowColor:
            solvedState === quizState.solved ? theme.questionTextColor : "red",
          shadowOpacity: 0.4,
          shadowRadius: 35,
          elevation: 5,
        }}
      >
        <BookmarkContainer>
          <BookmarkBtn
            isBookmarked={isBookmarked}
            quizId={quizId}
            style={{ transform: [{ scale: 2 }] }}
          />
        </BookmarkContainer>
        <QuizSolvedPopupDescription
          state={solvedState}
          description={description}
        />
        <QuizSolvedPopupButtons
          showAnswerDetail={showAnswerDetail}
          onConfirm={solvedPopupConfirmCallback}
        />
      </BaseCardModal>
      <QuizAnswerDetailModal
        quizId={quizId}
        visible={!popupToggle}
        setVisible={(visible) => setPopupToggle(visible)}
        callback={solvedPopupConfirmCallback}
      />
    </>
  );
};

export default QuizSolvedPopup;
