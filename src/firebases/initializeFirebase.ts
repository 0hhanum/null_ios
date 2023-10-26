import { initializeApp, getApps } from "firebase/app";
import {
  signInAnonymously,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const initializeFirebase = async () => {
  const apps = getApps();
  if (apps.length !== 0) return;
  const app = initializeApp({
    databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  });
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await signInAnonymously(auth));
    } catch (error) {
      console.error("Error initializing Firebase:", error);
      reject(error);
    }
  });
};

export default initializeFirebase;
