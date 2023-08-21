import React from "react";
import styled from "styled-components/native";

type size = "large" | "medium" | "small";
interface IText {
  size?: number | size;
  children: string | string[];
}

const Text = styled.Text<{ size: IText["size"] }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) =>
    typeof props.size === "number"
      ? `${props.size}px`
      : `${props.theme.variables.fontSize[props.size]}px`};
`;

const BaseText: React.FC<IText> = ({ size, children }) => {
  return <Text size={size || "medium"}>{children}</Text>;
};

export default BaseText;
