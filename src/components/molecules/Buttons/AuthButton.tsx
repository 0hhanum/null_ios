import React from "react";
import { loginMethod } from "../../../db/auth/auth";
import BaseText from "../../atoms/Texts/BaseText";
import { capitalizeFirstLetter } from "../../utils";
import styled from "styled-components/native";
import Authenticator from "../../../containers/Authenticator";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";

interface IAuthButton {
  loginMethod: loginMethod;
  bgColor: string;
  textColor: string;
  iconSource?: string;
  logoName?: string;
}

const ButtonContainer = styled.Pressable<{
  bgColor: string;
  textColor: string;
}>`
  width: 100%;
  padding: 4.5%;
  margin: 6px 0;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AuthButton = ({
  loginMethod,
  bgColor,
  textColor,
  iconSource,
  logoName,
}: IAuthButton) => {
  return (
    <ButtonContainer bgColor={bgColor}>
      {logoName !== undefined ? (
        <AntDesign name={logoName} size={20} color={textColor} />
      ) : (
        <Image style={{ width: 30, height: 30 }} source={iconSource}></Image>
      )}
      <BaseText size={18} style={{ color: textColor, marginLeft: 14 }}>
        {capitalizeFirstLetter(loginMethod)}로 계속하기
      </BaseText>
      <Authenticator />
    </ButtonContainer>
  );
};
export default AuthButton;
