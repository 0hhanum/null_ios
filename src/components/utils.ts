import { Dimensions } from "react-native";

export const getWindowSize = () => {
  return Dimensions.get("window");
};

export const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
