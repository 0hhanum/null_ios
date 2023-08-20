import { useQuery } from "@realm/react";
import React from "react";
import { Meta } from "../db/meta/meta";
import RootNav from "../navigation/RootNav";
import AuthNav from "../navigation/AuthNav";

const Router = () => {
  const metadata = useQuery<Meta>(Meta);
  const isFirstOpen = metadata.length === 0;
  return isFirstOpen ? <AuthNav /> : <RootNav />;
};

export default Router;
