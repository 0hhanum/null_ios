import { DatabaseReference, DataSnapshot } from "firebase/database";
import { getFirebaseData } from "./utils";
import { category, IQuiz } from "types/quizzes/quizTypes";
import IUserQuizData from "types/quizzes/userQuizDataTypes";

const getQuizzes = (
  dbRef: DatabaseReference,
  category: category
): Promise<IQuiz[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `quiz/${category}`;
      const snapshot = await getFirebaseData(dbRef, path);
      if (snapshot.exists()) {
        resolve(Object.values(snapshot.val()));
      } else {
        resolve([]);
      }
    } catch (e) {
      console.error("Something wrong with get quiz data", e);
      reject(e);
    }
  });
};
const getUserQuizData = (
  dbRef: DatabaseReference,
  uid: string
): Promise<IUserQuizData> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `users/${uid}`;
      const snapshot = await getFirebaseData(dbRef, path);
      if (snapshot.exists()) {
        resolve(snapshot.val());
      } else {
        resolve({
          quizzes: {},
          bookmarks: [],
        });
      }
    } catch (e) {
      console.error("Something wrong with get user db", e);
      reject(e);
    }
  });
};

export { getQuizzes, getUserQuizData };
