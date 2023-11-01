import { selector } from "recoil";
import { localQuizDataAtom } from "./atom";
import { quizState } from "types/quizzes/quizTypes";

interface ISetLocalBookmarkData {
  quizId: string;
  isBookmarked: boolean;
}
interface ISetLocalQuizData {
  quizId: string;
  state: quizState;
}
export const setLocalBookmarkSelector = selector({
  key: "setLocalBookmarkData",
  set: ({ set }, { quizId, isBookmarked }: ISetLocalBookmarkData) => {
    set(localQuizDataAtom, (current) => {
      const newBookmark = { ...current.bookmarks };
      newBookmark[quizId] = !isBookmarked;
      return {
        ...current,
        bookmarks: newBookmark,
      };
    });
  },
  get: () => null,
});

export const setLocalQuizStateSelector = selector({
  key: "setLocalQuizData",
  set: ({ set }, { quizId, state }: ISetLocalQuizData) => {
    set(localQuizDataAtom, (current) => {
      const newQuizzes = { ...current.quizzes };
      newQuizzes[quizId] = state;
      return {
        ...current,
        quizzes: newQuizzes,
      };
    });
  },
  get: () => null,
});
