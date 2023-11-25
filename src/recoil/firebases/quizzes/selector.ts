import { getDatabase, ref } from "firebase/database";
import {
  getQuiz,
  getQuizIdList,
  getUserQuizData,
} from "firebases/databases/quizzes";
import { selector, selectorFamily } from "recoil";
import { userUidAtom } from "recoil/auths/atom";
import { IQuiz, category, quizState } from "types/quizzes/quizTypes";
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
              firebaseUserQuizData?.bookmarks?.hasOwnProperty(quiz.id) || false;
            quiz.state =
              firebaseUserQuizData?.quizzes?.[quiz.id]?.state ||
              quizState.pending;
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

export const quizzesSelectorByBookmarked = selector<IQuiz[]>({
  key: "bookmarkedQuizzes",
  get: async ({ get }) => {
    const fbUserData = await get(firebaseUserQuizDataSelector);
    try {
      const dbRef = ref(getDatabase());
      const localUserData = get(localQuizDataAtom);
      const bookmarkObjects = {
        ...fbUserData.bookmarks,
        ...localUserData.bookmarks,
      };
      const bookmarkList = Object.entries(bookmarkObjects).filter(
        ([_, bookmarkData]) =>
          !bookmarkData.hasOwnProperty("isBookmarked") ||
          (bookmarkData as any).isBookmarked
      ); // firebase bookmark data는 북마크 취소시 데이터셋을 삭제하기 때문에 isBookmarked 없음. bookmarked 상태인 데이터만 가져옴

      bookmarkList.sort((a, b) => {
        if (a[1].createdAt < b[1].createdAt) return 1;
        else return -1;
      }); // createdAt 순서대로 정렬

      const quizData = Promise.all(
        bookmarkList.map(async ([quizId]) => {
          const quiz = await getQuiz(dbRef, quizId);
          quiz.isBookmarked = true;
          quiz.state =
            localUserData?.quizzes[quiz.id]?.state ||
            fbUserData?.quizzes?.[quiz.id]?.state ||
            quizState.pending;
          return quiz;
        })
      );
      return quizData;
    } catch (e) {
      console.error("Something wrong with getting quizData", e);
      return [];
    }
  },
});
export const wrongQuizzesSelector = selector<IQuiz[]>({
  key: "wrongQuizzes",
  get: async ({ get }) => {
    const fbUserData = await get(firebaseUserQuizDataSelector);
    try {
      const dbRef = ref(getDatabase());
      const localUserData = get(localQuizDataAtom);
      const quizzesObjects = {
        ...fbUserData.quizzes,
        ...localUserData.quizzes,
      };
      const wrongQuizzes = Object.entries(quizzesObjects).filter(
        ([_, quizData]) => quizData.state === quizState.wrong
      );

      wrongQuizzes.sort((a, b) => {
        if (a[1].createdAt < b[1].createdAt) return 1;
        else return -1;
      }); // createdAt 순서대로 정렬

      const quizData = Promise.all(
        wrongQuizzes.map(async ([quizId]) => {
          const quiz = await getQuiz(dbRef, quizId);
          quiz.isBookmarked = localUserData?.bookmarks?.hasOwnProperty(quiz.id)
            ? localUserData?.bookmarks?.[quiz.id].isBookmarked
            : fbUserData.bookmarks?.hasOwnProperty(quiz.id) || false;
          quiz.state = quizState.wrong;
          return quiz;
        })
      );
      return quizData;
    } catch (e) {
      console.error("Something wrong with getting quizData", e);
      return [];
    }
  },
});
export const recentQuizzesSelector = selector<IQuiz[]>({
  key: "recentQuizzes",
  get: async ({ get }) => {
    const fbUserData = await get(firebaseUserQuizDataSelector);
    try {
      const dbRef = ref(getDatabase());
      const localUserData = get(localQuizDataAtom);
      const recentQuizzesObjects = {
        ...fbUserData.quizzes,
        ...localUserData.quizzes,
      };
      const recentQuizzes = Object.entries(recentQuizzesObjects);
      recentQuizzes.sort((a, b) => {
        if (a[1].createdAt < b[1].createdAt) return 1;
        return -1;
      }); // createdAt 순서대로 정렬
      const quizData = Promise.all(
        recentQuizzes.map(async ([quizId]) => {
          const quiz = await getQuiz(dbRef, quizId);
          // local bookmark는 true / false로 판별해야함
          quiz.isBookmarked = localUserData?.bookmarks?.hasOwnProperty(quiz.id)
            ? localUserData?.bookmarks?.[quiz.id].isBookmarked
            : fbUserData.bookmarks?.hasOwnProperty(quiz.id) || false;
          quiz.state =
            localUserData?.quizzes[quiz.id]?.state ||
            fbUserData?.quizzes?.[quiz.id]?.state ||
            quizState.pending;
          return quiz;
        })
      );
      return quizData;
    } catch (e) {
      console.error("Something wrong with getting quizData", e);
      return [];
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
