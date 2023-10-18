import React from "react";
import RootNav from "../navigation/RootNav";
import AuthNav from "../navigation/AuthNav";

const Router = () => {
  const isFirstOpen = false; // After MVP
  return isFirstOpen ? <AuthNav /> : <RootNav />;
};

export default Router;
