import React from "react";
import styled from "styled-components/native";
import { size } from "./types";
import { getSize } from "./utils";
import { TextProps } from "react-native";

interface IText extends TextProps {
  size?: number | size;
  children: string | string[];
}

const Text = styled.Text<{ size: IText["size"] }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${({ size }) => getSize(size)};
`;

const BaseText: React.FC<IText> = ({ size, children, ...props }) => {
  return (
    <Text {...props} size={size || "medium"}>
      {children}
    </Text>
  );
};

export default BaseText;
