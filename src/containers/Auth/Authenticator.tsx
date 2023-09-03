import React from "react";
import { loginMethod } from "db/auth/auth";
import AppleLoginContainer from "./AppleLoginContainer";
import { useNavigation } from "@react-navigation/native";

interface IAuthenticator {
  loginMethod: loginMethod;
}
const Authenticator = ({ loginMethod }: IAuthenticator) => {
  switch (loginMethod) {
    case "apple":
      return <AppleLoginContainer />;
    case "naver":
      return null;
    case "kakao":
      return null;
  }
};
export default Authenticator;
