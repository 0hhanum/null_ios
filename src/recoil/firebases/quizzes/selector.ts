import { getDatabase, ref } from "firebase/database";
import { getQuizzes, getUserQuizData } from "firebases/databases/quizzes";
import { selector, selectorFamily } from "recoil";
import { userUidAtom } from "recoil/auths/atom";
import { IQuiz, category } from "types/quizzes/quizTypes";
import IFirebaseUserQuizData from "types/quizzes/firebaseUserQuizDataTypes";
import { localQuizDataAtom } from "recoil/quizzes/atom";

export const firebaseQuizzesSelector = selectorFamily<IQuiz[], category>({
  key: "firebaseQuizzes",
  get:
    (category) =>
    async ({ get }) => {
      const firebaseUserQuizData = await get(firebaseUserQuizDataSelector);
      try {
        const dbRef = ref(getDatabase());
        const quizzes = await getQuizzes(dbRef, category);
        quizzes.forEach((quiz) => {
          quiz.isBookmarked =
            firebaseUserQuizData?.bookmarks?.[category]?.[quiz.id] || false;
          quiz.state =
            firebaseUserQuizData?.quizzes?.[category]?.[quiz.id] || "pending";
        });
        return quizzes;
      } catch (e) {
        console.error("Something wrong with bring quizzes", e);
        return [];
      }
    },
});

export const firebaseUserQuizDataSelector = selector<IFirebaseUserQuizData>({
  key: "firebaseUserQuizData",
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

export const quizzesSelector = selectorFamily<IQuiz[], category>({
  key: "quizzes",
  get:
    (category) =>
    async ({ get }) => {
      const firebaseQuizData = await get(firebaseQuizzesSelector(category));
      try {
        const localQuizData = get(localQuizDataAtom);
        const quizData = firebaseQuizData.map((quiz) => {
          return {
            ...quiz,
            state: localQuizData.quizzes.hasOwnProperty(quiz.id)
              ? localQuizData.quizzes[quiz.id].state
              : quiz.state,
            isBookmarked: localQuizData.bookmarks.hasOwnProperty(quiz.id)
              ? localQuizData.bookmarks[quiz.id].isBookmarked
              : quiz.isBookmarked,
          };
        });
        return quizData;
      } catch (e) {
        console.error("Something wrong with getting quizData", e);
        return [];
      }
    },
});
