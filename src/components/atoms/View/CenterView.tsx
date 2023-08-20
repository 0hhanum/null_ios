import React from "react";
import styled from "styled-components/native";
import { BaseViewContainer } from "./BaseView";

interface ICenterView {
  children?: any;
}
export const CenterViewContainer = styled(BaseViewContainer)`
  justify-content: center;
  align-items: center;
`;
const CenterView: React.FC<ICenterView> = ({ children }) => {
  return <CenterViewContainer>{children}</CenterViewContainer>;
};

export default CenterView;
