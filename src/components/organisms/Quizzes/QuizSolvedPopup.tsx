import BaseButton from "components/atoms/Buttons/BaseButton";
import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import BaseCardModal from "components/molecules/Modals/BaseCardModal";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { IQuiz, quizState } from "types/quizzes/quizTypes";

interface QuizSolvedPopup {
  solvedPopupConfirmCallback: () => void;
  solvedState: quizState;
  description: IQuiz["description"];
}
const WRONG_MESSAGE = "정답이 아니에요 😢";
const CORRECT_MESSAGE = "정답입니다! 👍";
const SolvedMessage = styled(BaseText)`
  margin-bottom: 20px;
`;
const DescriptionText = styled(BaseText)`
  margin-bottom: 10px;
`;
const MessageContainer = styled(BaseView)`
  background-color: ${(props) => props.theme.headerColor};
  margin-top: 55px;
  width: 90%;
  flex: 5;
`;
const BtnContainer = styled(BaseView)`
  width: 90%;
  flex: 1;
  /* background-color: green; */
  background-color: ${(props) => props.theme.headerColor};
  margin-top: 10px;
  justify-content: center;
`;

const ConfirmBtn = styled(BaseButton)`
  background-color: blue;
  position: absolute;
  bottom: 20px;
`;

const QuizSolvedPopup = ({
  solvedState,
  solvedPopupConfirmCallback,
  description,
}: QuizSolvedPopup) => {
  const [popupVisible, setPopupVisible] = useState(true);
  const message = solvedState === "wrong" ? WRONG_MESSAGE : CORRECT_MESSAGE;
  return (
    <BaseCardModal
      visible={popupVisible}
      setVisible={(visible) => setPopupVisible(visible)}
      height="60%"
    >
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
        <ConfirmBtn
          style={{ backgroundColor: "blue", position: "absolute", bottom: 20 }}
          onPress={solvedPopupConfirmCallback}
        >
          <BaseText>확인</BaseText>
        </ConfirmBtn>
      </BtnContainer>
    </BaseCardModal>
  );
};

export default QuizSolvedPopup;
