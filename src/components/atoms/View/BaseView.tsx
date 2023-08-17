import React from "react";
import styled from "styled-components/native";

interface IBaseView {
  children?: any;
}
export const BaseViewContainer = styled.View`
  background-color: ${(props) => props.theme.bgColor};
`;
const BaseView: React.FC<IBaseView> = ({ children }) => {
  return <BaseViewContainer>{children}</BaseViewContainer>;
};

export default BaseView;
