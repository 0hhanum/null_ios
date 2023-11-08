import React from "react";
import BaseView from "./BaseView";
import styled from "styled-components/native";

const Container = styled(BaseView)`
  background-color: transparent;
  padding-vertical: 1px;
  border-bottom-color: ${(props) => props.theme.textColor};
  border-bottom-width: 0.5px;
`;
const UnderlineBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default UnderlineBox;
