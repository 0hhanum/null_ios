import { get, child, DatabaseReference, DataSnapshot } from "firebase/database";

const getFirebaseData = (
  dbRef: DatabaseReference,
  path: string
): Promise<DataSnapshot> => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbChild = child(dbRef, path);
      const snapshot = await get(dbChild);
      resolve(snapshot);
    } catch (error) {
      console.error("Something wrong with get firebase realtime db", error);
      throw error;
    }
  });
};

export { getFirebaseData };
