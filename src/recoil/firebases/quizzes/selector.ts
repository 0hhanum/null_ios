import { getDatabase, ref } from "firebase/database";
import {
  getQuiz,
  getQuizIdList,
  getUserQuizData,
} from "firebases/databases/quizzes";
import { selector, selectorFamily } from "recoil";
import { userUidAtom } from "recoil/auths/atom";
import { IQuiz, category } from "types/quizzes/quizTypes";
import IFirebaseUserQuizData from "types/quizzes/firebaseUserQuizDataTypes";
import { localQuizDataAtom } from "recoil/quizzes/atom";

export const firebaseQuizzesSelectorByCategory = selectorFamily<
  IQuiz[],
  category
>({
  key: "firebaseQuizzes",
  get:
    (category) =>
    async ({ get }) => {
      const firebaseUserQuizData = await get(firebaseUserQuizDataSelector);
      try {
        const dbRef = ref(getDatabase());
        const quizIdList = await getQuizIdList(dbRef, category);
        const quizzes = Promise.all(
          quizIdList.map(async (quizId) => {
            const quiz = await getQuiz(dbRef, quizId);
            quiz.isBookmarked =
              firebaseUserQuizData?.bookmarks?.[quiz.id] || false;
            quiz.state = firebaseUserQuizData?.quizzes?.[quiz.id] || "pending";
            return quiz;
          })
        );
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

export const quizzesSelectorByCategory = selectorFamily<IQuiz[], category>({
  key: "quizzes",
  get:
    (category) =>
    async ({ get }) => {
      const firebaseQuizData = await get(
        firebaseQuizzesSelectorByCategory(category)
      );
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
