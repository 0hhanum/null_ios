import { atom } from "recoil";
import { quizState } from "types/quizzes/quizTypes";

interface ILocalBookmarkType {
  [id: string]: boolean;
}
interface ILocalQuizDataType {
  [id: string]: quizState;
}
export interface ILocalQuizzes {
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
