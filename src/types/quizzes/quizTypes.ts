export type category = "js" | "ts" | "fe" | "dev" | "react";
export enum quizState {
  "pending" = "pending",
  "solved" = "solved",
  "wrong" = "wrong",
}
export type 문제유형 = "객관식" | "주관식" | "OX" | "빈칸";

export interface IQuiz {
  id: string;
  category: category;
  title: string;
  tags: string[];
  questionType: 문제유형;
  question: string[];
  answer: string[];
  choices?: string[] | string[][]; // 객관식 | 빈칸
  level?: number;
  state: quizState;
  isBookmarked: boolean;
  description: string[];
}

export enum answerEnum {
  "A",
  "B",
  "C",
  "D",
}

export enum OXEnum {
  O = "O",
  X = "X",
}
