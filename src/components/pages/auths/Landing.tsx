import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import MainLogo from "../../molecules/Logos/MainLogo";
import BaseCard from "../../molecules/Cards/BaseCard";
import HCenterView from "../../atoms/View/HCenterView";
import { getWindowSize } from "../../utils";
import BaseView from "../../atoms/View/BaseView";
import AuthButtons from "../../organisms/Auths/AuthButtons";
import BaseText from "components/atoms/Texts/BaseText";
import { Pressable } from "react-native";

const Landing = () => {
  const { height } = getWindowSize();
  return (
    <PageLayout>
      <HCenterView style={{ marginTop: height * 0.1 }}>
        <BaseCard cardType="largeSquare" trafficLight={true}>
          <MainLogo />
        </BaseCard>
      </HCenterView>
      <BaseView style={{ marginTop: 30 }}>
        <AuthButtons />
      </BaseView>
      <BaseView
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Pressable onPress={() => {}}>
          <BaseText size={18} style={{ textDecorationLine: "underline" }}>
            다음에 할게요
          </BaseText>
        </Pressable>
      </BaseView>
    </PageLayout>
  );
};

export default Landing;
