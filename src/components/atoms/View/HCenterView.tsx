import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer, IBaseView } from "./BaseView";

export const HCenterViewContainer = styled(BaseViewContainer)`
  flex-direction: row;
  justify-content: center;
`;

const HCenterView: React.FC<IBaseView> = ({ children, style }) => {
  return <HCenterViewContainer style={style}>{children}</HCenterViewContainer>;
};

export default HCenterView;
