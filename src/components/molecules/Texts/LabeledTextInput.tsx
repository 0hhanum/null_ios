import React from "react";
import { BaseViewContainer } from "components/atoms/View/BaseView";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";
import BaseText from "components/atoms/Texts/BaseText";
import BaseTextInput from "components/atoms/Texts/BaseTextInput";
import { size } from "components/atoms/Texts/types";

interface ILabeledTextInput extends TextInputProps {
  label: string;
  size?: size;
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
  ...props
}: ILabeledTextInput) => {
  return (
    <Container style={containerStyle}>
      <BaseText style={labelStyle} size={size}>
        {label}
      </BaseText>
      <Separator />
      <BaseTextInput {...props} size={size} />
    </Container>
  );
};

export default LabeledTextInput;
