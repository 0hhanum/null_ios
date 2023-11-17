import BaseAnimatedText from "components/atoms/Texts/BaseAnimatedText";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

interface IBlankQuizBlankText {
  isCurrentTarget: boolean;
}
const BLANK = "_____________";
const BLANK_ANIMATION_DURATION = 350;
const BLANK_ANIMATION_INTERPOLATION_THRESHOLD = -2;
const Text = styled(BaseAnimatedText)`
  color: ${(props) => props.theme.questionTextColor};
  line-height: 30px;
  margin-bottom: 6px;
`;
const getBlankAnimation = (toValue: number, animatedVal: Animated.Value) =>
  Animated.timing(animatedVal, {
    toValue,
    duration: BLANK_ANIMATION_DURATION,
    useNativeDriver: false,
  });
const BlankQuizBlankText = ({ isCurrentTarget }: IBlankQuizBlankText) => {
  const theme = useTheme();
  const blankAnimationVal = useRef(new Animated.Value(0)).current;
  const blankAnimation = Animated.loop(
    Animated.sequence([
      getBlankAnimation(0, blankAnimationVal),
      getBlankAnimation(
        BLANK_ANIMATION_INTERPOLATION_THRESHOLD,
        blankAnimationVal
      ),
      getBlankAnimation(0, blankAnimationVal),
    ])
  );
  const blankInterpolatedColor = blankAnimationVal.interpolate({
    inputRange: [BLANK_ANIMATION_INTERPOLATION_THRESHOLD, 0],
    outputRange: ["blue", "white"],
  });

  const cleanBlankAnimation = () => {
    blankAnimation.stop();
    blankAnimationVal.removeAllListeners();
    blankInterpolatedColor.removeAllListeners();
  };

  // when component is current target
  useEffect(() => {
    if (isCurrentTarget) {
      blankAnimation.start();
    }
  }, [isCurrentTarget]);
  // unmounted
  useEffect(() => {
    return () => {
      cleanBlankAnimation(); // clean animation
    };
  }, []);
  return (
    <Text
      style={{
        color: isCurrentTarget
          ? blankInterpolatedColor
          : theme.questionTextColor,
        transform: [{ translateY: blankAnimationVal }],
      }}
    >
      {BLANK}
    </Text>
  );
};
export default BlankQuizBlankText;
