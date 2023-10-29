import { DatabaseReference, DataSnapshot } from "firebase/database";
import { getFirebaseData, removeFirebaseData, setFirebaseData } from "./utils";
import { category, IQuiz } from "types/quizzes/quizTypes";
import IFirebaseUserQuizData from "types/quizzes/firebaseUserQuizDataTypes";

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
): Promise<IFirebaseUserQuizData> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `users/${uid}`;
      const snapshot = await getFirebaseData(dbRef, path);
      if (snapshot.exists()) {
        resolve(snapshot.val());
      } else {
        resolve({
          quizzes: {},
          bookmarks: {},
        });
      }
    } catch (e) {
      console.error("Something wrong with get user db", e);
      reject(e);
    }
  });
};

const bookmarkQuiz = (
  dbRef: DatabaseReference,
  quizId: string,
  uuid: string,
  category: category,
  isBookmarked: boolean
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `users/${uuid}/bookmarks/${category}/${quizId}`;
      if (isBookmarked) {
        await removeFirebaseData(dbRef, path);
      } else {
        await setFirebaseData(dbRef, path, true);
      }
      resolve();
    } catch (e) {
      console.error("Something wrong with bookmark quiz", e);
      reject(e);
    }
  });
};
export { getQuizzes, getUserQuizData, bookmarkQuiz };
