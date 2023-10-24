import React from "react";
import BaseView from "../View/BaseView";
import BaseText from "./BaseText";
import styled from "styled-components/native";

interface ITag {
  tagName: string;
}

const Container = styled(BaseView)`
  margin-right: 5px;
  border-color: gray;
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
