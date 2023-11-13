import React from "react";
import { BaseViewContainer } from "components/atoms/View/BaseView";
import styled from "styled-components/native";
import BaseText from "components/atoms/Texts/BaseText";
import BorderEffectTextInput, {
  IBorderEffectTextInput,
} from "components/atoms/Texts/BorderEffectTextInput";
import { TextStyle } from "react-native";

interface ILabeledBorderEffectTextInput extends IBorderEffectTextInput {
  label: string;
  containerStyle?: React.CSSProperties;
  labelStyle?: TextStyle;
}
const Container = styled(BaseViewContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Separator = styled.View`
  width: 10px;
`;
const LabeledBorderEffectTextInput = ({
  label,
  containerStyle,
  labelStyle,
  size,
  textInputRef,
  ...props
}: ILabeledBorderEffectTextInput) => {
  return (
    <Container style={containerStyle}>
      <BaseText style={labelStyle} size={size}>
        {label}
      </BaseText>
      <Separator />
      <BorderEffectTextInput
        {...props}
        size={size}
        textInputRef={textInputRef}
        placeholderTextColor="gray"
      />
    </Container>
  );
};

export default LabeledBorderEffectTextInput;
