import { useTheme } from "styled-components";
import { fontSize } from "./types";
import { BASIC_DIMENSION } from "../../../../styles/theme";

export const getFontSize = (size: fontSize) => {
  const theme = useTheme();
  if (typeof size === "number") {
    return Math.ceil(size * (theme.width / BASIC_DIMENSION.width));
  }
  return theme.variables.fontSize[size];
};
