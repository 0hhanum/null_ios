import React from "react";
import PageLayout from "../../atoms/View/PageLayout";
import { useTheme } from "styled-components";
import Widget from "components/molecules/Widgets/Widget";
import HCenterView from "components/atoms/View/HCenterView";

const Home = () => {
  const theme = useTheme();
  return (
    <PageLayout>
      <HCenterView style={{ justifyContent: "space-between" }}>
        <Widget name="JS" bgColor={theme.colors.JS} />
        <Widget name="TS" bgColor={theme.colors.TS} textColor="white" />
      </HCenterView>
    </PageLayout>
  );
};

export default Home;
