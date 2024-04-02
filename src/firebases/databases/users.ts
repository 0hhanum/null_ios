import { DatabaseReference } from "firebase/database";
import { setFirebaseData } from "./utils";

const saveUserExpoNotificationToken = (
  dbRef: DatabaseReference,
  userId: string,
  token: string
): Promise<[void, void]> => {
  const userPath = `users/${userId}`;
  const tokenPath = `${userPath}/expoNotificationToken`;
  const lastLoginPath = `${userPath}/lastLogin`;
  return Promise.all([
    setFirebaseData(dbRef, tokenPath, token),
    setFirebaseData(dbRef, lastLoginPath, Date.now()),
  ]);
};

export { saveUserExpoNotificationToken };
