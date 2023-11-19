import BaseAnimatedText from "components/atoms/Texts/BaseAnimatedText";
import { IText } from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

interface IAppearAnimationText extends Omit<IText, "children"> {
  text: string;
}

export const APPEAR_TEXT_ANIMATION_DURATION = 250;
const TextContainer = styled(BaseView)`
  flex-wrap: wrap;
  flex-direction: row;
  background-color: transparent;
`;
const Text = styled(BaseAnimatedText)`
  color: ${(props) => props.theme.questionTextColor};
  line-height: 30px;
  margin-bottom: 6px;
`;
const animateText = (animatedVal: Animated.Value) =>
  Animated.timing(animatedVal, {
    duration: APPEAR_TEXT_ANIMATION_DURATION,
    toValue: 1,
    useNativeDriver: true,
  });
const AppearAnimationText = ({ text, ...props }: IAppearAnimationText) => {
  const letters = text.trim().split("");
  const animationValues = useRef<Animated.Value[]>(
    letters.map(() => new Animated.Value(0))
  );
  useEffect(() => {
    if (!animationValues.current) return;
    // mount
    Animated.sequence(
      animationValues.current.map((animationValue) =>
        animateText(animationValue)
      )
    ).start();
    // unmount
    return () => {
      animationValues.current?.forEach((animationValue) =>
        animationValue.removeAllListeners()
      );
    };
  }, [animationValues]);
  return (
    <TextContainer>
      {letters.map((letter, index) => (
        <Text
          key={index}
          {...props}
          style={{
            opacity: animationValues.current[index],
          }}
        >
          {letter}
        </Text>
      ))}
    </TextContainer>
  );
};

export default AppearAnimationText;
