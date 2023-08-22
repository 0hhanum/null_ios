import React from "react";
import HCenterView from "../../atoms/View/HCenterView";
import AuthButton from "../../molecules/Buttons/AuthButton";

const methodStyles = {
  kakao: {
    bgColor: "#FEE500",
    textColor: "#191919",
    iconSource: require("@assets/images/logos/kakao.svg"),
  },
  email: {
    bgColor: "#222222",
    textColor: "#ffffff",
    logoName: "mail",
  },
  naver: {
    bgColor: "#03C75A",
    textColor: "#ffffff",
    iconSource: require("@assets/images/logos/naver.svg"),
  },
  apple: {
    bgColor: "#ffffff",
    textColor: "#000000",
    logoName: "apple1",
  },
};
const AuthButtons = () => {
  return (
    <>
      <HCenterView>
        <AuthButton loginMethod="apple" {...methodStyles.apple} />
      </HCenterView>
      <HCenterView>
        <AuthButton loginMethod="naver" {...methodStyles.naver} />
      </HCenterView>
      <HCenterView>
        <AuthButton loginMethod="kakao" {...methodStyles.kakao} />
      </HCenterView>
      <HCenterView>
        <AuthButton loginMethod="email" {...methodStyles.email} />
      </HCenterView>
    </>
  );
};
export default AuthButtons;
