import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import styled from "styled-components/native";
import { size } from "./types";
import { getFontSize } from "./utils";

export interface IBaseTextInput extends TextInputProps {
  size?: number | size;
  textInputRef?: React.MutableRefObject<TextInput>;
}
const StyledTextInput = styled.TextInput<{
  size: IBaseTextInput["size"];
  isFocused: boolean;
}>`
  border: 0.5px;
  border-bottom-color: ${(props) =>
    props.isFocused ? props.theme.green : props.theme.textColor};
  border-radius: 5px;
  font-size: ${({ size }) => `${getFontSize(size)}px`};
  padding: 8px;
  color: ${(props) => props.theme.textColor};
  width: auto;
`;

const BaseTextInput = ({ size, textInputRef, ...props }: IBaseTextInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (props.onBlur !== undefined) {
      props.onBlur(e);
    }
  };
  return (
    <StyledTextInput
      {...props}
      size={size || "medium"}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      ref={textInputRef}
    />
  );
};

export default BaseTextInput;
