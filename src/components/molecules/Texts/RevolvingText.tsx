import React, { useEffect, useRef, useState } from "react";
import BaseText from "components/atoms/Texts/BaseText";
import BaseAnimatedView from "components/atoms/View/BaseAnimatedView";
import { Animated, TextStyle } from "react-native";
import styled from "styled-components/native";
import { fontSize } from "components/atoms/Texts/types";

interface IRevolvingText {
  text: string;
  containerWidth: number;
  fontSize?: fontSize;
  fontStyle?: TextStyle;
}
const REVOLVING_PADDING = 15;
const REVOLVING_DURATION = 2000;
const RContainer = styled(BaseAnimatedView)<{ width: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "200%")};
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
`;
const RevolvingText = ({
  text,
  containerWidth,
  fontSize,
  fontStyle,
}: IRevolvingText) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [RContainerWidth, setRContainerWidth] = useState<number>(null);
  const _fontSize = fontSize || "medium";
  useEffect(() => {
    if (!RContainerWidth) return;
    if (RContainerWidth < containerWidth) return; // not overflowed
    const startAnimation = () => {
      Animated.loop(
        Animated.timing(translateX, {
          toValue: -(RContainerWidth - (containerWidth - REVOLVING_PADDING)),
          duration: Math.floor(
            REVOLVING_DURATION * (RContainerWidth / containerWidth)
          ),
          useNativeDriver: true,
        })
      ).start();
    };
    startAnimation();
  }, [translateX, RContainerWidth]);
  const onLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }) => {
    setRContainerWidth(Math.ceil(width) + REVOLVING_PADDING);
  };
  return (
    <RContainer style={{ transform: [{ translateX }] }} width={RContainerWidth}>
      <BaseText size={_fontSize} style={fontStyle} onLayout={onLayout}>
        {text}
      </BaseText>
    </RContainer>
  );
};

export default RevolvingText;
