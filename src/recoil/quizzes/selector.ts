import { firebase } from "@react-native-firebase/database";
import { selectorFamily } from "recoil";
import { category } from "types/quizzes/quizTypes";

export const quizSelector = selectorFamily({
  key: "quizzes",
  get: (category: category) => async () => {
    try {
      const response = await firebase
        .app()
        .database(process.env.EXPO_PUBLIC_FIREBASE_URL)
        .ref(`quiz/${category}`)
        .once("value");
      return await response.val();
    } catch (e) {
      console.log(e);
      return null;
    }
  },
});
