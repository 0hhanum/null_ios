import { useTheme } from "styled-components";
import { size } from "./types";
import { BASIC_DIMENSION } from "../../../../styles/theme";

export const getFontSize = (size: size | number) => {
  const theme = useTheme();
  if (typeof size === "number") {
    return Math.ceil(size * (theme.width / BASIC_DIMENSION.width));
  }
  return theme.variables.fontSize[size];
};
