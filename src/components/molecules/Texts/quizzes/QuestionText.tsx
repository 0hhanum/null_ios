import React from "react";
import QuestionCodeBlock from "./QuestionCodeBlock";
import styled from "styled-components/native";
import BaseText from "components/atoms/Texts/BaseText";

const CODE_BLOCK_IDENTIFIER = "<code";
interface IQuestionText {
  text: string;
}
const Text = styled(BaseText)`
  color: ${(props) => props.theme.questionTextColor};
  line-height: 30px;
  margin-bottom: 6px;
`;

const QuestionText = ({ text }: IQuestionText) => {
  if (text.startsWith(CODE_BLOCK_IDENTIFIER)) {
    return <QuestionCodeBlock codeBlock={text} />;
  } else {
    return <Text size={20}>{text}</Text>;
  }
};

export default QuestionText;
