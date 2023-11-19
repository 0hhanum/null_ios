import { useTheme } from "styled-components";
import { quizState } from "types/quizzes/quizTypes";

export const getQuizChoiceBtnColor = (
  state: quizState,
  type: "border" | "background"
): string => {
  const theme = useTheme();
  switch (state) {
    case quizState.solved:
      return theme.green;
    case quizState.wrong:
      return theme.warning;
    default:
      return type === "border" ? theme.textColor : theme.bgColor;
  }
};
