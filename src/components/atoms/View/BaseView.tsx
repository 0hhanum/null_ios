import React from "react";
import styled from "styled-components/native";

interface BaseView {
  children?: any;
}
const Container = styled.View`
  background-color: ${(props) => props.theme.bgColor};
`;
const BaseView: React.FC<BaseView> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BaseView;
