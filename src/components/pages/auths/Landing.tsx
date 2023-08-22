import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import MainLogo from "../../molecules/Logos/MainLogo";
import BaseCard from "../../molecules/Cards/BaseCard";
import HCenterView from "../../atoms/View/HCenterView";
import { getWindowSize } from "../../utils";
import BaseView from "../../atoms/View/BaseView";
import AuthButtons from "../../organisms/Auths/AuthButtons";

const Landing = () => {
  const { height } = getWindowSize();
  return (
    <PageLayout>
      <HCenterView style={{ marginTop: height * 0.1 }}>
        <BaseCard cardType="largeSqaure" trafficLight={true}>
          <MainLogo />
        </BaseCard>
      </HCenterView>
      <BaseView style={{ marginTop: 25 }}>
        <AuthButtons />
      </BaseView>
    </PageLayout>
  );
};

export default Landing;
