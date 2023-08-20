import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface IVCenter {
  children?: any;
}
const Container = styled(BaseViewContainer)`
  justify-content: center;
`;
const VCenterView: React.FC<IVCenter> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default VCenterView;
