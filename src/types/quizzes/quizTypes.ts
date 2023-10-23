export type category = "js" | "ts" | "fe" | "cs" | "react";
type questionType = "객관식" | "주관식" | "OX" | "빈칸";

export interface IQuiz {
  title: string;
  tags: string[];
  questionType: questionType;
  question: string[];
  answer: string[];
  choices?: string[] | string[][]; // 객관식 | 빈칸
  level?: number;
}
