import BaseView from "components/atoms/View/BaseView";
import React from "react";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/styles/hljs";
import styled from "styled-components/native";

interface ICodeHighlighter {
  code: string;
  language: string;
}
const CodeContainer = styled(BaseView)`
  background-color: transparent;
  padding: 5px;
`;
const CodeHighlighter = ({ code, language }: ICodeHighlighter) => {
  return (
    <SyntaxHighlighter
      style={atomOneDark}
      language={language}
      customStyle={{ borderRadius: 10 }}
      CodeTag={CodeContainer}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
