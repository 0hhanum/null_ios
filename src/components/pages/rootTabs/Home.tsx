import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import { ScrollView } from "react-native";
import HCenterView from "components/atoms/View/HCenterView";
import HomeWidget from "components/organisms/Widgets/HomeWidget";

const Home = () => {
  return (
    <PageLayout>
      <ScrollView>
        <HomeWidget id="fe" />
        <HCenterView style={{ justifyContent: "space-between" }}>
          <HomeWidget id="js" />
          <HomeWidget id="ts" />
        </HCenterView>
        <HomeWidget id="react" />

        <HomeWidget id="cs" />
      </ScrollView>
    </PageLayout>
  );
};

export default Home;
