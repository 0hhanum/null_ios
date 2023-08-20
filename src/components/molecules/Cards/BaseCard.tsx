import React from "react";
import styled, { useTheme } from "styled-components";
import { CenterViewContainer } from "../../atoms/View/CenterView";
import TrafficLight from "../TrafficLights/TrafficLight";
import { getCardDimensions } from "../utils";

export type cardType = "banner" | "square" | "halfBanner" | "largeSqaure";
interface IBaseCard {
  bgColor?: string;
  cardType?: cardType;
  trafficLight?: boolean;
  children: React.JSX.Element;
}

const CardContainer = styled(CenterViewContainer)<{
  bgColor: string;
  dimensions: {
    width: string;
    height: string;
  };
}>`
  background-color: ${(props) => props.bgColor};
  border-radius: 40px;
  width: ${(props) => props.dimensions.width};
  height: ${(props) => props.dimensions.height};
`;

const BaseCard = ({ bgColor, cardType, trafficLight, children }: IBaseCard) => {
  const theme = useTheme();
  return (
    <CardContainer
      bgColor={bgColor || theme.headerColor}
      dimensions={getCardDimensions(cardType)}
    >
      {trafficLight && <TrafficLight />}
      {children}
    </CardContainer>
  );
};

export default BaseCard;
