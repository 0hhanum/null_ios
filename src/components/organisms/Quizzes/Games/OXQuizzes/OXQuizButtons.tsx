import BaseView from "components/atoms/View/BaseView";
import OXButton from "components/molecules/Buttons/Quizzes/OXQuizzes/OXButton";
import React, { useRef } from "react";
import { Animated, Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { IQuizGame } from "types/quizzes/quizGameType";
import { OXEnum, quizState } from "types/quizzes/quizTypes";

interface IOXQuizButtons {
  solvedCallback: IQuizGame["solvedCallback"];
  answer: OXEnum;
}

const OX_ANIMATION_DURATION = 300;
const OXButtonContainer = styled(BaseView)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: 10px;
`;
const OXQuizButtons = ({ solvedCallback, answer }: IOXQuizButtons) => {
  const animatedVal = useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const OIconAnimatedColorValue = animatedVal.interpolate({
    inputRange: [-1, 0],
    outputRange: [theme.questionTextColor, "gray"],
    extrapolate: "clamp",
  });
  const XIconAnimatedColorValue = animatedVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["gray", "red"],
    extrapolate: "clamp",
  });
  const onPress = (pressed: OXEnum) => {
    Animated.timing(animatedVal, {
      duration: OX_ANIMATION_DURATION,
      toValue: pressed === "O" ? -1 : 1,
      useNativeDriver: false,
    }).start(() => {
      solvedCallback(answer === pressed ? quizState.solved : quizState.wrong);
    });
  };
  return (
    <OXButtonContainer>
      <OXButton
        onPress={() => onPress(OXEnum.O)}
        OX={OXEnum.O}
        animatedColorValue={OIconAnimatedColorValue}
      />
      <OXButton
        onPress={() => onPress(OXEnum.X)}
        OX={OXEnum.X}
        animatedColorValue={XIconAnimatedColorValue}
      />
    </OXButtonContainer>
  );
};

export default OXQuizButtons;
