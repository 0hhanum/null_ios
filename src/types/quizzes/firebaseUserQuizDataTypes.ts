import { category, quizState } from "./quizTypes";

interface IBookmarks {
  [key: string]: boolean;
}
interface IQuizzes {
  [key: string]: quizState;
}
type bookmarkType = Partial<Record<category, IBookmarks>>;
type quizzesType = Partial<Record<category, IQuizzes>>;

export default interface IFirebaseUserQuizData {
  bookmarks?: bookmarkType;
  quizzes?: quizzesType;
}
