import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface ICenterView {
  children?: any;
}
const Container = styled(BaseViewContainer)`
  justify-content: center;
  align-items: center;
`;
const CenterView: React.FC<ICenterView> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CenterView;
