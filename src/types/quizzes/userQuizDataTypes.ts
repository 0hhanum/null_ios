import { quizState } from "./quizTypes";

export default interface IUserQuizData {
  bookmarks: string[];
  quizzes: {
    [key: string]: quizState;
  };
}
