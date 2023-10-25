import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface IGradientCard {
  colors: string[];
}
const Container = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;
const InnerContainer = styled(Animated.View)`
  width: 200%;
  height: 100%;
`;
const ANIMATION_DURATION = 1000;

const GradientCard = ({ colors }: IGradientCard) => {
  const animationVal = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    if (containerWidth !== 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationVal, {
            toValue: -containerWidth,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(animationVal, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [animationVal, containerWidth]);
  return (
    <Container
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        setContainerWidth(width);
      }}
    >
      <InnerContainer style={{ transform: [{ translateX: animationVal }] }}>
        <LinearGradient
          colors={colors}
          style={{
            width: "100%",
            height: "100%",
          }}
          start={{ x: 0, y: 2 }}
          end={{ x: 1, y: 0 }}
        ></LinearGradient>
      </InnerContainer>
    </Container>
  );
};

export default GradientCard;
