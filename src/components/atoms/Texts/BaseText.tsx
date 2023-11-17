import React from "react";
import styled from "styled-components/native";
import { fontSize } from "./types";
import { getFontSize } from "./utils";
import { TextProps } from "react-native";

export interface IText extends TextProps {
  size?: fontSize;
  children: string | string[];
}

const Text = styled.Text<{ size: IText["size"] }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${({ size }) => `${getFontSize(size)}px`};
`;

const BaseText: React.FC<IText> = ({ size, children, ...props }) => {
  return (
    <Text {...props} size={size || "medium"}>
      {children}
    </Text>
  );
};

export default BaseText;
