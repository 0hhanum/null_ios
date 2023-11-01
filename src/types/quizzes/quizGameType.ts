import { IQuiz, quizState } from "./quizTypes";

export interface IQuizGame {
  quiz: IQuiz;
  solvedCallback: (state: quizState) => void;
}
