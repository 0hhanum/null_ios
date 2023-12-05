import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

const SkeletonAnimation = styled(Animated.View)`
  width: 80px;
  height: 150%;
  position: absolute;
`;
const QuizCardSkeletonUIAnimation = () => {
  const translateX = useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    const startSkeletonUIAnimation = () => {
      Animated.loop(
        Animated.timing(translateX, {
          toValue: 400,
          duration: 1500,
          easing: Easing.inOut(Easing.cubic),
          useNativeDriver: true,
        })
      ).start();
    };
    startSkeletonUIAnimation();
    // skeletonUI will be unmounted when data is loaded.
    return () => {
      translateX.stopAnimation();
      translateX.removeAllListeners();
    };
  }, []);
  return (
    <SkeletonAnimation style={{ transform: [{ translateX }] }}>
      <LinearGradient
        colors={["transparent", "rgba(255, 255, 255, 0.4)"]}
        style={{ flex: 1, width: "100%" }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </SkeletonAnimation>
  );
};

export default QuizCardSkeletonUIAnimation;
