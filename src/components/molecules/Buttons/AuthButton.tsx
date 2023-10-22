import React, { useState } from "react";
import { loginMethod } from "../../../db/auth/auth";
import BaseText from "../../atoms/Texts/BaseText";
import { capitalizeFirstLetter } from "../../utils";
import styled from "styled-components/native";
import Authenticator from "../../../containers/auths/Authenticator";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { IconType } from "types/common/antDesignTypes";
import { useNavigation } from "@react-navigation/native";

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
  height: 55px;
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
  const [isLoginButtonClicked, setLoginButtonClicked] = useState(false);
  const navigation = useNavigation<any>();
  const onPress = () => {
    if (loginMethod === "email") {
      navigation.navigate("EmailLogin");
      return;
    }
    setLoginButtonClicked(true);
  };
  return (
    <ButtonContainer bgColor={bgColor} onPress={onPress}>
      {logoName !== undefined ? (
        <AntDesign name={logoName as IconType} size={20} color={textColor} />
      ) : (
        <Image style={{ width: 30, height: 30 }} source={iconSource}></Image>
      )}
      <BaseText size={16} style={{ color: textColor, marginLeft: 16 }}>
        {capitalizeFirstLetter(loginMethod)}로 계속하기
      </BaseText>
      {isLoginButtonClicked && <Authenticator loginMethod={loginMethod} />}
    </ButtonContainer>
  );
};
export default AuthButton;
