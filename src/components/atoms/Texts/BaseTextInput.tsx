import React from "react";
import styled from "styled-components/native";
import { fontSize } from "./types";
import { getFontSize } from "./utils";
import { TextInput, TextInputProps } from "react-native";

interface IBaseTextInput extends TextInputProps {
  size?: fontSize;
  ref?: React.MutableRefObject<TextInput>;
}

const Input = styled.TextInput<{ size: fontSize }>`
  font-size: ${(props) => `${getFontSize(props.size)}px`};
`;

const BaseTextInput = ({ size, ...props }: IBaseTextInput) => {
  return <Input {...props} size={size || "medium"} />;
};

export default BaseTextInput;
