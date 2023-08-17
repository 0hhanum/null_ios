import React from "react";
import styled from "styled-components/native";

type size = "large" | "medium" | "small";
interface IText {
  size?: number | size;
  children: string;
}
const getFontSize = (size: size) => {
  switch (size) {
    case "large":
      return "32px";
    case "medium":
      return "24px";
    case "small":
      return "12px";
    default:
      return "10px";
  }
};

const Text = styled.Text<{ size: IText["size"] }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) =>
    typeof props.size === "number"
      ? `${props.size}px`
      : getFontSize(props.size)};
`;

const BaseText: React.FC<IText> = ({ size, children }) => {
  return <Text size={size && "medium"}>{children}</Text>;
};

export default BaseText;
