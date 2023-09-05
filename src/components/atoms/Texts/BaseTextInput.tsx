import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import styled from "styled-components/native";
import { size } from "./types";
import { getSize } from "./utils";

interface IBaseTextInput extends TextInputProps {
  size?: number | size;
}
const StyledTextInput = styled.TextInput<{
  size: IBaseTextInput["size"];
  isFocused: boolean;
}>`
  border: 0.5px;
  border-bottom-color: ${(props) =>
    props.isFocused ? props.theme.green : props.theme.textColor};
  border-radius: 5px;
  font-size: ${({ size }) => getSize(size)};
  padding: 8px;
  color: ${(props) => props.theme.textColor};
  width: auto;
`;

const BaseTextInput = ({ size, ...props }: IBaseTextInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const onBlur =
    props.onBlur !== undefined
      ? (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
          props.onBlur(e);
          setIsFocused(false);
        }
      : () => setIsFocused(false);
  return (
    <StyledTextInput
      {...props}
      size={size || "medium"}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={onBlur}
    />
  );
};

export default BaseTextInput;
