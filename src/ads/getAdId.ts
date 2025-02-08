import { TestIds } from "react-native-google-mobile-ads";
import { Platform } from "react-native";

type AD_TYPE = "INTERSTITIAL" | "BANNER" | "NATIVE" | "APP_OPEN";
export function getAdId(type: AD_TYPE) {
  if (__DEV__) {
    return TestIds[type];
  }
  const adIds = Platform.select({
    ios: {
      INTERSTITIAL: process.env.EXPO_PUBLIC_ADMOB_INTERSTITIAL_ID_IOS,
      BANNER: process.env.EXPO_PUBLIC_ADMOB_BANNER_ID_IOS,
      NATIVE: "",
      APP_OPEN: "",
    },
    android: {
      INTERSTITIAL: process.env.EXPO_PUBLIC_ADMOB_INTERSTITIAL_ID_ANDROID,
      BANNER: process.env.EXPO_PUBLIC_ADMOB_BANNER_ID_ANDROID,
      NATIVE: "",
      APP_OPEN: "",
    },
  });

  if (adIds && adIds[type]) {
    return adIds[type];
  }
  return null;
}
