import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import MainLogo from "../../molecules/Logos/MainLogo";
import BaseCard from "../../molecules/Cards/BaseCard";
import HCenterView from "../../atoms/View/HCenterView";

const Landing = () => {
  return (
    <PageLayout>
      <HCenterView style={{ marginTop: 60 }}>
        <BaseCard cardType="largeSqaure" trafficLight={true}>
          <MainLogo />
        </BaseCard>
      </HCenterView>
    </PageLayout>
  );
};

export default Landing;
