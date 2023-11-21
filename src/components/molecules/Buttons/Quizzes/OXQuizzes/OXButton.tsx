import React from "react";
import { Animated, Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { OXEnum } from "types/quizzes/quizTypes";

interface IOXButton {
  onPress: () => void;
  OX: OXEnum;
  animatedColorValue: Animated.AnimatedInterpolation<string | number>;
}
const OX_SVG_ICON_SIZE = 160;
const O_PATH = "M128,16A112,112,0,1,1,16,128,112,112,0,0,1,128,16Z";
const X_PATH = "M40,40 L216,216 M40,216 L216,40";
const AnimatedPath = styled(Animated.createAnimatedComponent(Path))``;

const OXButton = ({ onPress, OX, animatedColorValue }: IOXButton) => {
  const theme = useTheme();
  const widthRatio = theme.widthRatio;
  return (
    <Pressable onPress={onPress}>
      <Svg
        width={OX_SVG_ICON_SIZE * widthRatio}
        height={OX_SVG_ICON_SIZE * widthRatio}
        viewBox="0 0 256 256"
      >
        <AnimatedPath
          fill="none"
          stroke={animatedColorValue}
          strokeWidth={20}
          strokeLinecap="round"
          d={OX === OXEnum.O ? O_PATH : X_PATH}
        />
      </Svg>
    </Pressable>
  );
};

export default OXButton;
