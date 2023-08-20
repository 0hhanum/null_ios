import { cardType } from "./Cards/BaseCard";
import { getWindowSize } from "../utils";

export const getCardDimensions = (cardType: cardType) => {
  const { width, height } = getWindowSize();
  switch (cardType) {
    case "banner":
      return { width: "100%", height: `${Math.floor(height * 0.3)}px` };
    case "halfBanner":
      return { width: "100%", height: `${Math.floor(height * 0.15)}px` };
    case "largeSqaure":
      return {
        width: `${Math.floor(width * 0.9)}px`,
        height: `${Math.floor(width * 0.9)}px`,
      };
    case "square":
    default:
      return {
        width: `${Math.floor(width * 0.45)}px`,
        height: `${Math.floor(width * 0.45)}px`,
      };
  }
};
