import BaseButton from "components/atoms/Buttons/BaseButton";
import { IBaseModal } from "components/atoms/Modals/BaseModal";
import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import BaseCardModal from "components/molecules/Modals/BaseCardModal";
import QuizAnswerDetailWebView from "components/molecules/WebViews/Quizzes/QuizAnswerDetailWebView";
import React from "react";
import styled from "styled-components/native";
import { IQuiz } from "types/quizzes/quizTypes";

interface IQuizAnswerDetailModal extends IBaseModal {
  quizId: IQuiz["id"];
  callback: () => void;
}
const BTN_TEXT_SIZE = 20;
const MODAL_HEIGHT = "90%";
const MODAL_WIDTH = "100%";

const SizedBox = styled(BaseView)`
  height: 55px;
`;
const BtnContainer = styled(BaseView)`
  width: 100%;
`;
const GoBackBtn = styled(BaseButton)`
  background-color: blue;
  margin-top: 20px;
`;
const QuizAnswerDetailModal = ({
  quizId,
  visible,
  setVisible,
  callback,
}: IQuizAnswerDetailModal) => {
  const goBack = () => {
    setVisible((curr) => !curr);
    callback();
  };
  return (
    <BaseCardModal
      visible={visible}
      setVisible={(visible) => setVisible(visible)}
      height={MODAL_HEIGHT}
      width={MODAL_WIDTH}
    >
      <SizedBox />
      <QuizAnswerDetailWebView quizId={quizId} />
      <BtnContainer>
        <GoBackBtn onPress={goBack}>
          <BaseText size={BTN_TEXT_SIZE}>아하! 이해했어요</BaseText>
        </GoBackBtn>
      </BtnContainer>
    </BaseCardModal>
  );
};

export default QuizAnswerDetailModal;
