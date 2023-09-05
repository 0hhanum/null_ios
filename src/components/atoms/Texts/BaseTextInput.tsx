import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

const StyledTextInput = styled.TextInput``;

const BaseTextInput = ({ style, ...props }: TextInputProps) => {
  return <StyledTextInput style={style} {...props} />;
};

export default BaseTextInput;
