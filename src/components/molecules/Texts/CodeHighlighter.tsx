import React from "react";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/styles/hljs";

interface ICodeHighlighter {
  code: string;
  language: string;
}
const CodeHighlighter = ({ code, language }: ICodeHighlighter) => {
  return (
    <SyntaxHighlighter style={atomOneDark} language={language}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
