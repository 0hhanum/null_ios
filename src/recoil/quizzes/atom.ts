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
export const currentQuizAtom = atom<string>({
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
