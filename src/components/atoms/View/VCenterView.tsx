import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer, IBaseView } from "./BaseView";

export const VCenterViewContainer = styled(BaseViewContainer)`
  justify-content: center;
`;
const VCenterView: React.FC<IBaseView> = ({ children, style }) => {
  return <VCenterViewContainer style={style}>{children}</VCenterViewContainer>;
};

export default VCenterView;
