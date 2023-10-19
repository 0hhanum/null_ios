import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import { useTheme } from "styled-components";
import Widget from "components/molecules/Widgets/Widget";
import { ScrollView } from "react-native";
import BaseView from "components/atoms/View/BaseView";
import HCenterView from "components/atoms/View/HCenterView";

const Home = () => {
  const theme = useTheme();
  return (
    <PageLayout>
      <Widget bgColor="white" cardType="banner" name="FE" />
      <ScrollView>
        <HCenterView style={{ justifyContent: "space-between" }}>
          <Widget name="JS" bgColor={theme.colors.JS} />
          <Widget name="TS" bgColor={theme.colors.TS} textColor="white" />
        </HCenterView>
        <Widget
          iconPath={require("@assets/images/logos/svgs/react.svg")}
          bgColor={theme.colors.React}
          cardType="banner"
        />

        <Widget bgColor="blue" cardType="banner" name="CS" />
      </ScrollView>
    </PageLayout>
  );
};

export default Home;
