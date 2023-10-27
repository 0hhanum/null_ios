import {
  get,
  set,
  child,
  DatabaseReference,
  DataSnapshot,
} from "firebase/database";

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
      console.error(
        `Something wrong with get firebase realtime db -- ${path}`,
        error
      );
      reject(error);
    }
  });
};

const setFirebaseData = (
  dbRef: DatabaseReference,
  path: string,
  data: any
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbChild = child(dbRef, path);
      await set(dbChild, data);
      resolve();
    } catch (error) {
      console.error(
        `Something wrong with set firebase realtime db -- ${path}`,
        error
      );
      reject(error);
    }
  });
};

export { getFirebaseData, setFirebaseData };