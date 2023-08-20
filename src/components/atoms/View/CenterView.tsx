import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer, IBaseView } from "./BaseView";

export const CenterViewContainer = styled(BaseViewContainer)`
  justify-content: center;
  align-items: center;
`;
const CenterView: React.FC<IBaseView> = ({ children, style }) => {
  return <CenterViewContainer style={style}>{children}</CenterViewContainer>;
};

export default CenterView;
