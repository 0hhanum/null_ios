import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer, IBaseView } from "./BaseView";

const Container = styled(BaseViewContainer)`
  padding: 20px;
  flex: 1;
`;
const PageLayout: React.FC<IBaseView> = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default PageLayout;
