import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  width: 75px;
  justify-content: space-between;
`;
const Light = styled.View<{ color: string }>`
  height: 18px;
  width: 18px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;
const TrafficLight = () => {
  const theme = useTheme();
  return (
    <Container>
      <Light color={theme.red} />
      <Light color={theme.yellow} />
      <Light color={theme.green} />
    </Container>
  );
};

export default TrafficLight;
