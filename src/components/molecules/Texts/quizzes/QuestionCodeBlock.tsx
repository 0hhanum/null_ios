import React from "react";
import { extractDataFromCodeTagString } from "./utils";
import CodeHighlighter from "../CodeHighlighter";
import styled from "styled-components/native";
import BaseView from "components/atoms/View/BaseView";

interface IQuestionCodeBlock {
  codeBlock: string;
}
const CodeContainer = styled(BaseView)`
  padding: 10px;
  background-color: ${(props) => props.theme.headerColor};
`;
const QuestionCodeBlock = ({ codeBlock }: IQuestionCodeBlock) => {
  const { content, language } = extractDataFromCodeTagString(codeBlock);
  return (
    <CodeContainer>
      <CodeHighlighter language={language} code={content} />
    </CodeContainer>
  );
};

export default QuestionCodeBlock;
