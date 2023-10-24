import { Image } from "expo-image";
import React from "react";

interface IBookmark {
  isBookmarked: boolean;
  style?: React.CSSProperties;
}
const Bookmark = ({ isBookmarked, style }: IBookmark) => {
  const iconSource = isBookmarked
    ? require("@assets/images/logos/svgs/bookmark_filled.svg")
    : require("@assets/images/logos/svgs/bookmark_empty.svg");
  return (
    <Image source={iconSource} style={{ width: 40, height: 40, ...style }} />
  );
};
export default Bookmark;
