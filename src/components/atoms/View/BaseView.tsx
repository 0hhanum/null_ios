import React from "react";
import styled from "styled-components/native";

export interface IBaseView {
  children?: any;
  style?: React.CSSProperties;
}
export const BaseViewContainer = styled.View`
  background-color: ${(props) => props.theme.bgColor};
`;
const BaseView: React.FC<IBaseView> = ({ children, style }) => {
  return <BaseViewContainer style={style}>{children}</BaseViewContainer>;
};

export default BaseView;
