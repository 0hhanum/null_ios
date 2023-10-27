import { getDatabase, ref } from "firebase/database";
import { getQuizzes, getUserQuizData } from "firebases/databases/quizzes";
import { selector, selectorFamily } from "recoil";
import { userUidAtom } from "recoil/auths/atom";
import { IQuiz, category } from "types/quizzes/quizTypes";
import IUserQuizData from "types/quizzes/userQuizDataTypes";

export const getQuizSelector = selectorFamily<IQuiz[], category>({
  key: "quizzes",
  get:
    (category) =>
    async ({ get }) => {
      try {
        const dbRef = ref(getDatabase());
        const quizzes = await getQuizzes(dbRef, category);
        const userQuizData = await get(userQuizDataSelector);
        quizzes.forEach((quiz) => {
          quiz.isBookmarked = userQuizData?.bookmarks.includes(quiz.id);
          quiz.state = userQuizData?.quizzes[quiz.id] || "pending";
        });
        return quizzes;
      } catch (e) {
        console.error("Something wrong with bring quizzes", e);
        return [];
      }
    },
});

export const userQuizDataSelector = selector<IUserQuizData>({
  key: "userQuizData",
  get: async ({ get }) => {
    try {
      const uuid = get(userUidAtom);
      const dbRef = ref(getDatabase());
      const userQuizData = await getUserQuizData(dbRef, uuid);
      return userQuizData;
    } catch (e) {
      console.error("Something wrong with getting user quiz data", e);
      return null;
    }
  },
});
