import { atom } from "recoil";
import { category, quizState } from "types/quizzes/quizTypes";

export interface ILocalBookmarkType {
  [id: string]: boolean;
}
export interface ILocalQuizDataType {
  [id: string]: quizState;
}
interface ILocalQuizzes {
  bookmarks: ILocalBookmarkType;
  quizzes: ILocalQuizDataType;
}

export const localQuizDataAtom = atom<ILocalQuizzes>({
  key: "localQuizzes",
  default: {
    bookmarks: {},
    quizzes: {},
  },
});
