import { DatabaseReference } from "firebase/database";
import { getFirebaseData, removeFirebaseData, setFirebaseData } from "./utils";
import { category, IQuiz, quizState } from "types/quizzes/quizTypes";
import IFirebaseUserQuizData from "types/quizzes/firebaseUserQuizDataTypes";

const getQuiz = (dbRef: DatabaseReference, id: string): Promise<IQuiz> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `quiz/${id}`;
      const snapshot = await getFirebaseData(dbRef, path);
      if (snapshot.exists()) {
        resolve(snapshot.val());
      } else {
        resolve(null);
      }
    } catch (e) {
      console.error("Something wrong with get quiz data", e);
      reject(e);
    }
  });
};
const getQuizIdList = (
  dbRef: DatabaseReference,
  category: category
): Promise<string[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `quizCategory/${category}`;
      const snapshot = await getFirebaseData(dbRef, path);
      if (snapshot.exists()) {
        resolve(Object.keys(snapshot.val()));
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
  userId: string,
  isBookmarked: boolean
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `users/${userId}/bookmarks/${quizId}`;
      if (isBookmarked) {
        await removeFirebaseData(dbRef, path);
      } else {
        await setFirebaseData(dbRef, path, {
          createdAt: Date.now(),
        });
      }
      resolve();
    } catch (e) {
      console.error("Something wrong with bookmark quiz", e);
      reject(e);
    }
  });
};
const changeQuizStateUserData = (
  dbRef: DatabaseReference,
  quizId: string,
  userId: string,
  state: quizState
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `users/${userId}/quizzes/${quizId}`;
      await setFirebaseData(dbRef, path, {
        state,
        createdAt: Date.now(),
      });
      resolve();
    } catch (e) {
      console.error("Something wrong with bookmark quiz", e);
      reject(e);
    }
  });
};

const initializeUserQuizData = (
  dbRef: DatabaseReference,
  userId: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const path = `users/${userId}`;
      await removeFirebaseData(dbRef, path);
      resolve();
    } catch (e) {
      console.error("Something wrong with initialize user quiz data", e);
      reject(e);
    }
  });
};

export {
  getQuiz,
  getUserQuizData,
  bookmarkQuiz,
  getQuizIdList,
  changeQuizStateUserData,
  initializeUserQuizData,
};
