import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { size } from "./types";
import { getSize } from "./utils";

interface IBaseTextInput extends TextInputProps {
  size?: number | size;
}
const StyledTextInput = styled.TextInput<{ size: IBaseTextInput["size"] }>`
  border: 1px;
  border-color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  font-size: ${({ size }) => getSize(size)};
`;

const BaseTextInput = ({ size, ...props }: IBaseTextInput) => {
  return <StyledTextInput {...props} size={size || "medium"} />;
};

export default BaseTextInput;
