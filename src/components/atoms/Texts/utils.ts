import { useTheme } from "styled-components";
import { fontSize } from "./types";
import { getWindowRatio } from "components/utils";

export const getFontSize = (size: fontSize) => {
  const theme = useTheme();
  const { widthRatio } = getWindowRatio();
  if (typeof size === "number") {
    return Math.ceil(size * widthRatio);
  }
  return theme.variables.fontSize[size];
};
