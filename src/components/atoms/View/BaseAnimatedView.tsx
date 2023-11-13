import React from "react";
import { Animated, ViewProps } from "react-native";
import styled from "styled-components/native";

interface IBaseAnimatedView extends ViewProps {
  children?: any;
}
const BaseViewContainer = styled(Animated.View)`
  background-color: ${(props) => props.theme.bgColor};
`;
const BaseAnimatedView: React.FC<IBaseAnimatedView> = ({
  children,
  style,
  ...props
}) => {
  return (
    <BaseViewContainer style={style} {...props}>
      {children}
    </BaseViewContainer>
  );
};

export default BaseAnimatedView;
