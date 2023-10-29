import { getDatabase, ref } from "firebase/database";
import { getQuizzes, getUserQuizData } from "firebases/databases/quizzes";
import { selector, selectorFamily } from "recoil";
import { userUidAtom } from "recoil/auths/atom";
import { IQuiz, category } from "types/quizzes/quizTypes";
import IFirebaseUserQuizData from "types/quizzes/firebaseUserQuizDataTypes";

export const getQuizSelector = selectorFamily<IQuiz[], category>({
  key: "quizzes",
  get:
    (category) =>
    async ({ get }) => {
      const userQuizData = await get(userQuizDataSelector);
      try {
        const dbRef = ref(getDatabase());
        const quizzes = await getQuizzes(dbRef, category);
        quizzes.forEach((quiz) => {
          quiz.isBookmarked =
            userQuizData?.bookmarks?.[category]?.[quiz.id] || false;
          quiz.state =
            userQuizData?.quizzes?.[category]?.[quiz.id] || "pending";
        });
        return quizzes;
      } catch (e) {
        console.error("Something wrong with bring quizzes", e);
        return [];
      }
    },
});

export const userQuizDataSelector = selector<IFirebaseUserQuizData>({
  key: "userQuizData",
  get: async ({ get }) => {
    try {
      const uuid = get(userUidAtom);
      const dbRef = ref(getDatabase());
      return await getUserQuizData(dbRef, uuid);
    } catch (e) {
      console.error("Something wrong with getting user quiz data", e);
      return null;
    }
  },
});
