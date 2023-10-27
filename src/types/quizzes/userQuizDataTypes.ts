import { quizState } from "./quizTypes";

export default interface IUserQuizData {
  bookmarks: {
    [key: string]: boolean;
  };
  quizzes: {
    [key: string]: quizState;
  };
}
