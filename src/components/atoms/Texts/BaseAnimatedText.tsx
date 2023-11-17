import React from "react";
import styled from "styled-components/native";
import { getFontSize } from "./utils";
import { Animated } from "react-native";
import { IText } from "./BaseText";

const AnimatedText = styled(Animated.Text)<{ size: IText["size"] }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${({ size }) => `${getFontSize(size)}px`};
`;

const BaseAnimatedText = ({ size, children, ...props }: IText) => {
  return (
    <AnimatedText {...props} size={size || "medium"}>
      {children}
    </AnimatedText>
  );
};

export default BaseAnimatedText;
