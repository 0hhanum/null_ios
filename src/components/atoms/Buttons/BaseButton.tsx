import React from "react";
import { PressableProps } from "react-native";
import styled from "styled-components/native";

export interface IBaseButton extends PressableProps {
  children?: React.JSX.Element;
  width?: number;
  height?: number;
}

const Button = styled.Pressable`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "60px")};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BaseButton: React.FC<IBaseButton> = ({
  width,
  height,
  children,
  ...props
}) => {
  return (
    <Button {...props} width={width} height={height}>
      {children}
    </Button>
  );
};
export default BaseButton;
