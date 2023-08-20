import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface IHCenterView {
  children?: any;
}
const Container = styled(BaseViewContainer)`
  flex-direction: row;
  justify-content: center;
`;
const HCenterView: React.FC<IHCenterView> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HCenterView;
