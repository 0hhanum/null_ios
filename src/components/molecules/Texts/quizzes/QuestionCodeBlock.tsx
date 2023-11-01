import React from "react";
import { extractDataFromCodeTagString } from "./utils";
import CodeHighlighter from "../CodeHighlighter";

interface IQuestionCodeBlock {
  codeBlock: string;
}
const QuestionCodeBlock = ({ codeBlock }: IQuestionCodeBlock) => {
  const { content, language } = extractDataFromCodeTagString(codeBlock);
  return <CodeHighlighter language={language} code={content} />;
};

export default QuestionCodeBlock;
