import { getWindowSize } from "components/utils";
import { DefaultTheme } from "styled-components/native";

const { width, height } = getWindowSize();
export const BASIC_DIMENSION = {
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
      small: +(FONT_SIZE_SMALL * (width / BASIC_DIMENSION.width)).toFixed(1),
      medium: +(FONT_SIZE_MEDIUM * (width / BASIC_DIMENSION.width)).toFixed(1),
      large: +(FONT_SIZE_LARGE * (width / BASIC_DIMENSION.width)).toFixed(1),
    },
    layoutPadding: 20,
  },
  width,
  height,
};
