import BaseView from "components/atoms/View/BaseView";
import BookmarkBtn from "components/molecules/Cards/Quizzes/BookmarkBtn";
import BaseCardModal from "components/molecules/Modals/BaseCardModal";
import React, { useState } from "react";
import styled from "styled-components/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";
import QuizAnswerDetailModal from "./QuizAnswerDetailModal";
import QuizSolvedPopupDescription from "components/molecules/Texts/quizzes/QuizSolvedPopupDescription";
import QuizSolvedPopupButtons from "components/molecules/Buttons/Quizzes/QuizSolvedPopupButtons";

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
