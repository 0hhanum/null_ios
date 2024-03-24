import { DatabaseReference } from "firebase/database";
import { setFirebaseData } from "./utils";

const saveUserExpoNotificationToken = (
  dbRef: DatabaseReference,
  userId: string,
  token: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    console.log(userId, token);
    try {
      const path = `users/${userId}/expoNotificationToken`;
      resolve(setFirebaseData(dbRef, path, token));
    } catch (e) {
      console.error(
        "Something went wrong with save expo notification token.",
        e
      );
      reject(e);
    }
  });
};

export { saveUserExpoNotificationToken };
