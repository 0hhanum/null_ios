import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";

const FirebaseAppContainer = () => {
  useEffect(() => {
    initializeApp({
      databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    });
  }, []);
  return null;
};

export default FirebaseAppContainer;
