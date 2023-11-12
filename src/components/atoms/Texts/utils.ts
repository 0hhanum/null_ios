import { useTheme } from "styled-components";
import { size } from "./types";
import { BASIC_DIMENSION } from "../../../../styles/theme";

export const getSize = (size: size) => {
  const theme = useTheme();
  if (typeof size === "number") {
    return `${(size * (theme.width / BASIC_DIMENSION.width)).toFixed(1)}px`;
  }
  return `${theme.variables.fontSize[size]}px`;
};
