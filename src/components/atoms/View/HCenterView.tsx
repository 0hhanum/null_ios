import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface IHCenterView {
  children?: any;
}
export const HCenterViewContainer = styled(BaseViewContainer)`
  flex-direction: row;
  justify-content: center;
`;

const HCenterView: React.FC<IHCenterView> = ({ children }) => {
  return <HCenterViewContainer>{children}</HCenterViewContainer>;
};

export default HCenterView;
