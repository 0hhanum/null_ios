import { cardType } from "./Cards/BaseCard";
import { getWindowSize } from "../utils";

export const getCardDimensions = (cardType: cardType) => {
  const { width, height } = getWindowSize();
  switch (cardType) {
    case "bigBanner":
      return { width: "100%", height: `${Math.floor(height * 0.3)}px` };
    case "banner":
      return { width: "100%", height: `${Math.floor(height * 0.15)}px` };
    case "largeSquare":
      return {
        width: `${Math.floor(width * 0.9)}px`,
        height: `${Math.floor(width * 0.9)}px`,
      };
    case "board":
      return {
        width: `${Math.floor(width)}px`,
        height: `${Math.floor(width * 1.1)}px`,
      };
    case "square":
    default:
      return {
        width: `${Math.floor(width * 0.43)}px`,
        height: `${Math.floor(width * 0.43)}px`,
      };
  }
};
