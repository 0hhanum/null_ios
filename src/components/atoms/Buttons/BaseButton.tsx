import React from "react";
import { PressableProps } from "react-native";
import styled from "styled-components/native";

interface IBaseButton extends PressableProps {
  children: React.JSX.Element;
}
const Button = styled.Pressable``;

const BaseButton: React.FC<IBaseButton> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
export default BaseButton;
