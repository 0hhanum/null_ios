import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import styled from "styled-components/native";
import { fontSize } from "./types";
import { getFontSize } from "./utils";
import BaseTextInput from "./BaseTextInput";

export interface IBorderEffectTextInput extends TextInputProps {
  size?: fontSize;
  textInputRef?: React.MutableRefObject<TextInput>;
}
const Input = styled(BaseTextInput)<{
  size: fontSize;
  isFocused: boolean;
}>`
  border: 0.5px;
  border-bottom-color: ${(props) =>
    props.isFocused ? props.theme.questionTextColor : props.theme.textColor};
  border-radius: 5px;
  font-size: ${({ size }) => `${getFontSize(size)}px`};
  padding: 8px;
  color: ${(props) => props.theme.textColor};
  width: auto;
`;

const BorderEffectTextInput = ({
  size,
  textInputRef,
  ...props
}: IBorderEffectTextInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (props.onBlur !== undefined) {
      props.onBlur(e);
    }
  };
  return (
    <Input
      {...props}
      size={size || "medium"}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      ref={textInputRef}
    />
  );
};

export default BorderEffectTextInput;
