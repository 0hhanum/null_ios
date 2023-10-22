import React from "react";
import { loginMethod } from "db/auth/auth";
import { useNavigation } from "@react-navigation/native";
import AppleLoginContainer from "./AppleLoginContainer";

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
