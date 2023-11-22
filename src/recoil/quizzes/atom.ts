import { atom } from "recoil";
import { quizState } from "types/quizzes/quizTypes";

interface ILocalBookmarkType {
  [id: string]: {
    isBookmarked: boolean;
    createdAt: number;
  };
}
interface ILocalQuizDataType {
  [id: string]: {
    state: quizState;
    createdAt: number;
  };
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
