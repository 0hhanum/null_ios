import { atom } from "recoil";
import { category, quizState } from "types/quizzes/quizTypes";

export interface ILocalBookmarkType {
  [id: string]: {
    isBookmarked: boolean;
    category: category;
  };
}
export interface ILocalQuizDataType {
  [id: string]: {
    state: quizState;
    category: category;
  };
}
interface ILocalQuizzes {
  bookmarks: ILocalBookmarkType;
  quizzes: ILocalQuizDataType;
}
interface ICurrentQuiz {
  quizId: string;
  index?: number;
}

export const currentQuizAtom = atom<ICurrentQuiz>({
  key: "currentQuiz",
  default: null,
});

export const localQuizDataAtom = atom<ILocalQuizzes>({
  key: "localQuizzes",
  default: {
    bookmarks: {},
    quizzes: {},
  },
});
