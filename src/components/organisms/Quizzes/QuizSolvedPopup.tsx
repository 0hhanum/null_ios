import BaseButton from "components/atoms/Buttons/BaseButton";
import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import BookmarkBtn from "components/molecules/Cards/Quizzes/BookmarkBtn";
import BaseCardModal from "components/molecules/Modals/BaseCardModal";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";
import QuizAnswerDetailModal from "./QuizAnswerDetailModal";
import UnderlineBox from "components/atoms/View/UnderlineBox";

interface QuizSolvedPopup {
  solvedPopupConfirmCallback: () => void;
  solvedState: quizState;
  description: IQuiz["description"];
  quizId: IQuiz["id"];
  isBookmarked: IQuiz["isBookmarked"];
}
const WRONG_MESSAGE = "정답이 아니에요 😢";
const CORRECT_MESSAGE = "정답입니다! 👍";
const BUTTON_HEIGHT = 55;
const SolvedMessage = styled(BaseText)`
  margin-bottom: 25px;
  text-align: center;
`;
const DescriptionText = styled(BaseText)`
  margin-bottom: 10px;
`;
const BookmarkContainer = styled(BaseView)`
  position: absolute;
  top: 2px;
  right: 45px;
  z-index: 2;
  background-color: transparent;
`;
const MessageContainer = styled(BaseView)`
  background-color: ${(props) => props.theme.headerColor};
  margin-top: 70px;
  width: 90%;
  flex: 2.5;
`;
const BtnContainer = styled(BaseView)`
  width: 90%;
  flex: 1;
  background-color: ${(props) => props.theme.headerColor};
  margin-top: 10px;
  justify-content: center;
  flex-direction: column;
`;

const Btn = styled(BaseButton)`
  position: absolute;
`;
const ConfirmBtn = styled(Btn)`
  background-color: blue;
  bottom: 20px;
`;
const DetailWebViewBtn = styled(Btn)`
  bottom: 85px;
`;

const QuizSolvedPopup = ({
  solvedState,
  solvedPopupConfirmCallback,
  description,
  quizId,
  isBookmarked,
}: QuizSolvedPopup) => {
  const [popupToggle, setPopupToggle] = useState(true);
  const showAnswerDetailModal = () => {
    setPopupToggle(false);
  };
  const message =
    solvedState === quizState.wrong ? WRONG_MESSAGE : CORRECT_MESSAGE;
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
        <MessageContainer>
          <ScrollView>
            <SolvedMessage>{message}</SolvedMessage>
            {description.map((desc, index) => (
              <DescriptionText size="small" key={index}>
                • {desc}
              </DescriptionText>
            ))}
          </ScrollView>
        </MessageContainer>
        <BtnContainer>
          <DetailWebViewBtn
            onPress={showAnswerDetailModal}
            height={BUTTON_HEIGHT}
          >
            <UnderlineBox>
              <BaseText size="small">자세히 알아보기</BaseText>
            </UnderlineBox>
          </DetailWebViewBtn>
          <ConfirmBtn
            onPress={solvedPopupConfirmCallback}
            height={BUTTON_HEIGHT}
          >
            <BaseText size="small">확인</BaseText>
          </ConfirmBtn>
        </BtnContainer>
      </BaseCardModal>
      <QuizAnswerDetailModal
        quizId={quizId}
        visible={!popupToggle}
        setVisible={(visible) => setPopupToggle(visible)}
      />
    </>
  );
};

export default QuizSolvedPopup;
