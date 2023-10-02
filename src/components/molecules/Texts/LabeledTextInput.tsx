import React from "react";
import { BaseViewContainer } from "components/atoms/View/BaseView";
import styled from "styled-components/native";
import BaseText from "components/atoms/Texts/BaseText";
import BaseTextInput, {
  IBaseTextInput,
} from "components/atoms/Texts/BaseTextInput";

interface ILabeledTextInput extends IBaseTextInput {
  label: string;
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}
const Container = styled(BaseViewContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Separator = styled.View`
  width: 10px;
`;
const LabeledTextInput = ({
  label,
  containerStyle,
  labelStyle,
  size,
  textInputRef,
  ...props
}: ILabeledTextInput) => {
  return (
    <Container style={containerStyle}>
      <BaseText style={labelStyle} size={size}>
        {label}
      </BaseText>
      <Separator />
      <BaseTextInput {...props} size={size} textInputRef={textInputRef} />
    </Container>
  );
};

export default LabeledTextInput;
