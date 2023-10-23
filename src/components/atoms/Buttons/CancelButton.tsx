import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import BaseText from "../Texts/BaseText";

interface ICancelButton {
  callback: () => void;
  message?: string;
  size?: string;
}
const Btn = styled.Pressable<{ size?: number }>`
  width: ${(props) => (props.size ? props.size : "100%")};
  height: ${(props) => (props.size ? props.size : "60px")};
  background-color: ${(props) => props.theme.warning};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CancelButton = ({ callback, message, size }: ICancelButton) => {
  return (
    <Btn onPress={callback} size={size}>
      {message ? (
        <BaseText>{message}</BaseText>
      ) : (
        <AntDesign name="close" size={40} color="white" />
      )}
    </Btn>
  );
};
export default CancelButton;
