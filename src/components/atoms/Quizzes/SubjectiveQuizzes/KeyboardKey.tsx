import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import React from "react";
import { TouchableHighlight, ViewProps } from "react-native";
import styled from "styled-components/native";
import { IconType } from "types/common/antDesignTypes";
import { AntDesign } from "@expo/vector-icons";

interface ILetterContainer extends ViewProps {
  text?: string;
  icon?: IconType;
  onPress: (text: string) => void;
}
const LetterContainer = styled(BaseView)<{ isSpecialKey: boolean }>`
  border: 0.5px;
  border-color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  width: ${(props) => `${props.theme.width * 0.1}px`};
  height: ${(props) => `${props.theme.heightRatio * 50}px`};
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSpecialKey ? "darkgreen" : "#212221"};
`;
const KeyboardKey = ({ text, onPress, icon, ...props }: ILetterContainer) => {
  return (
    <TouchableHighlight onPress={() => onPress(text)} activeOpacity={0.4}>
      <LetterContainer {...props} isSpecialKey={icon !== undefined}>
        {text ? (
          <BaseText>{text}</BaseText>
        ) : (
          <AntDesign name={icon} color="white" size={20} />
        )}
      </LetterContainer>
    </TouchableHighlight>
  );
};

export default KeyboardKey;
