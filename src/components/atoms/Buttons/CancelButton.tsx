import React from "react";
import { AntDesign } from "@expo/vector-icons";
import BaseText from "../Texts/BaseText";
import BaseButton, { IBaseButton } from "./BaseButton";
import styled from "styled-components/native";

interface ICancelButton extends IBaseButton {
  size?: number;
  message?: string;
}
const CLOSE_ICON_SIZE = 40;
const Btn = styled(BaseButton)`
  background-color: ${(props) => props.theme.warning};
`;
const CancelButton = ({ message, size, ...props }: ICancelButton) => {
  return (
    <Btn {...props} width={size} height={size}>
      {message ? (
        <BaseText>{message}</BaseText>
      ) : (
        <AntDesign name="close" size={CLOSE_ICON_SIZE} color="white" />
      )}
    </Btn>
  );
};
export default CancelButton;
