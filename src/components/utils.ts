import { Dimensions } from "react-native";

const BASE_DIMENSION = {
  width: 414,
  height: 896,
};
export const getWindowSize = () => {
  return Dimensions.get("window");
};

export const getWindowRatio = () => {
  const { width, height } = getWindowSize();
  const { width: baseWidth, height: baseHeight } = BASE_DIMENSION;
  return {
    widthRatio: width / baseWidth,
    heightRatio: height / baseHeight,
  };
};

export const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
