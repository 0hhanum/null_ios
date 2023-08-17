import React from "react";
import styled from "styled-components/native";

interface IIconBtn {
  onPress: () => void;
  children: React.JSX.Element;
}
const Btn = styled.Pressable``;

const IconBtn: React.FC<IIconBtn> = ({ children, onPress }) => {
  return <Btn onPress={onPress}>{children}</Btn>;
};
export default IconBtn;
