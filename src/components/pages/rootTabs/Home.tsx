import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import { ScrollView } from "react-native";
import HCenterView from "components/atoms/View/HCenterView";
import HomeWidget from "components/organisms/Widgets/HomeWidget";

const Home = () => {
  return (
    <PageLayout>
      <ScrollView>
        <HomeWidget category="fe" />
        <HCenterView style={{ justifyContent: "space-between" }}>
          <HomeWidget category="js" />
          <HomeWidget category="ts" />
        </HCenterView>
        <HomeWidget category="react" />
        <HomeWidget category="dev" />
      </ScrollView>
    </PageLayout>
  );
};

export default Home;
