import { useTheme } from "styled-components";
import { size } from "./types";

export const getSize = (size: size) => {
  const theme = useTheme();
  return typeof size === "number"
    ? `${size}px`
    : `${theme.variables.fontSize[size]}px`;
};
