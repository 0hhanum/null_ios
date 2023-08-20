import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface IPageLayout {
  children?: any;
}
const Container = styled(BaseViewContainer)`
  padding: 20px;
  flex: 1;
`;
const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageLayout;
