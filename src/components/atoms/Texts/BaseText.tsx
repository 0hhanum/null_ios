import React from "react";
import styled from "styled-components/native";
import { size } from "./types";
import { getSize } from "./utils";

interface IText {
  size?: number | size;
  children: string | string[];
  style?: React.CSSProperties;
}

const Text = styled.Text<{ size: IText["size"] }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${({ size }) => getSize(size)};
`;

const BaseText: React.FC<IText> = ({ size, children, style }) => {
  return (
    <Text style={style} size={size || "medium"}>
      {children}
    </Text>
  );
};

export default BaseText;
