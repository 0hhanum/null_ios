import {
  get,
  set,
  child,
  DatabaseReference,
  DataSnapshot,
  remove,
  update,
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

const updateFirebaseData = (
  dbRef: DatabaseReference,
  path: string,
  data: any
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbChild = child(dbRef, path);
      await update(dbChild, data);
      resolve();
    } catch (error) {
      console.error(
        `Something wrong with update firebase realtime db -- ${path}`,
        error
      );
      reject(error);
    }
  });
};

const removeFirebaseData = (
  dbRef: DatabaseReference,
  path: string
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbChild = child(dbRef, path);
      await remove(dbChild);
      resolve();
    } catch (error) {
      console.error(
        `Something went wrong with removing data from Firebase realtime db -- ${path}`,
        error
      );
      reject(error);
    }
  });
};

export {
  getFirebaseData,
  setFirebaseData,
  updateFirebaseData,
  removeFirebaseData,
};
