import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface IVCenter {
  children?: any;
}
export const VCenterViewContainer = styled(BaseViewContainer)`
  justify-content: center;
`;
const VCenterView: React.FC<IVCenter> = ({ children }) => {
  return <VCenterViewContainer>{children}</VCenterViewContainer>;
};

export default VCenterView;
