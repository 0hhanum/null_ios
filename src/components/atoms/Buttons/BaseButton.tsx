import React from "react";
import styled from "styled-components/native";

interface IBaseButton {
  onPress: () => void;
  children: React.JSX.Element;
}
const Button = styled.Pressable``;

const BaseButton: React.FC<IBaseButton> = ({ children, onPress }) => {
  return <Button onPress={onPress}>{children}</Button>;
};
export default BaseButton;
