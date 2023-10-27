import { getDatabase, ref, get as getDB, child } from "firebase/database";
import { getQuizzes, getUserQuizData } from "firebases/databases/quizzes";
import { selectorFamily } from "recoil";
import { IQuiz, category } from "types/quizzes/quizTypes";

export const quizSelector = selectorFamily<IQuiz[], [category, string]>({
  key: "quizzes",
  get:
    ([category, uid]) =>
    async () => {
      try {
        const dbRef = ref(getDatabase());
        const quizzes = await getQuizzes(dbRef, category);
        const userQuizData = await getUserQuizData(dbRef, uid);
        quizzes.forEach((quiz) => {
          quiz.isBookmarked = userQuizData.bookmarks.includes(quiz.id);
          quiz.state = userQuizData.quizzes[quiz.id] || "pending";
        });
        return quizzes;
      } catch (e) {
        console.error("Something wrong with bring quizzes", e);
        return [];
      }
    },
});
