import BaseButton from "components/atoms/Buttons/BaseButton";
import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import UnderlineBox from "components/atoms/View/UnderlineBox";
import React from "react";
import styled from "styled-components/native";

interface IQuizSolvedPopupButtons {
  onConfirm: () => void;
  showAnswerDetail: () => void;
}

const BUTTON_HEIGHT = 55;

const Container = styled(BaseView)`
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

const QuizSolvedPopupButtons = ({
  onConfirm,
  showAnswerDetail,
}: IQuizSolvedPopupButtons) => {
  return (
    <Container>
      <DetailWebViewBtn onPress={showAnswerDetail} height={BUTTON_HEIGHT}>
        <UnderlineBox>
          <BaseText size="small">자세히 알아보기</BaseText>
        </UnderlineBox>
      </DetailWebViewBtn>
      <ConfirmBtn onPress={onConfirm} height={BUTTON_HEIGHT}>
        <BaseText size="small">확인</BaseText>
      </ConfirmBtn>
    </Container>
  );
};

export default QuizSolvedPopupButtons;
