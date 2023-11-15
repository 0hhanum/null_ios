import { useTheme } from "styled-components";
import { fontSize } from "./types";
import { getWindowRatio } from "components/utils";

export const getFontSize = (size: fontSize) => {
  const theme = useTheme();
  const { heightRatio } = getWindowRatio();
  if (typeof size === "number") {
    return Math.ceil(size * heightRatio);
  }
  return theme.variables.fontSize[size];
};
