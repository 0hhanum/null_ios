import { getWindowRatio, getWindowSize } from "components/utils";
import { DefaultTheme } from "styled-components/native";

const { width, height } = getWindowSize();
const { widthRatio, heightRatio } = getWindowRatio();
export const BASE_DIMENSION = {
  width: 414,
  height: 896,
};
const FONT_SIZE_SMALL = 16;
const FONT_SIZE_MEDIUM = 24;
const FONT_SIZE_LARGE = 36;
export const defaultTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  questionTextColor: "#7CFC00",
  headerColor: "#121212",
  borderColor: "#727781",
  red: "#ff605c",
  yellow: "#ffbd44",
  green: "#00ca4e",
  warning: "#DC3535",
  variables: {
    fontSize: {
      small: Math.ceil(FONT_SIZE_SMALL * (width / BASE_DIMENSION.width)),
      medium: Math.ceil(FONT_SIZE_MEDIUM * (width / BASE_DIMENSION.width)),
      large: Math.ceil(FONT_SIZE_LARGE * (width / BASE_DIMENSION.width)),
    },
    layoutPadding: 20,
  },
  width,
  height,
  widthRatio,
  heightRatio,
};
