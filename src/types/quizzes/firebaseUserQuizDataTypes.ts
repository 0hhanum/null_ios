import { quizState } from "./quizTypes";

interface IBookmarks {
  [key: string]: {
    createdAt: number;
  };
}
interface IQuizzes {
  [key: string]: {
    createdAt: number;
    state: quizState;
  };
}

export default interface IFirebaseUserQuizData {
  bookmarks?: IBookmarks;
  quizzes?: IQuizzes;
}
