import { atom } from "recoil";
import { quizState } from "types/quizzes/quizTypes";

interface ILocalQuizzes {
  bookmarks: {
    [id: string]: boolean;
  };
  quizzes: {
    [id: string]: quizState;
  };
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
