import React from "react";
import BaseText from "./BaseText";
import styled from "styled-components/native";
import CenterView from "../View/CenterView";

interface ITag {
  tagName: string;
}

const Container = styled(CenterView)`
  margin-right: 5px;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  padding-vertical: 4px;
  padding-horizontal: 8px;
`;
const TagText = styled(BaseText)`
  font-weight: 300;
`;
const Tag = ({ tagName }: ITag) => {
  return (
    <Container>
      <TagText size={13}>{tagName}</TagText>
    </Container>
  );
};
export default Tag;
