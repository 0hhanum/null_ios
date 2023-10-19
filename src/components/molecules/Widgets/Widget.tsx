import React from "react";
import BaseCard, { cardType } from "../Cards/BaseCard";
import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import { Image } from "expo-image";
import { View } from "react-native";
import styled from "styled-components/native";

interface IWidget {
  name?: string;
  bgColor: string;
  textColor?: string;
  iconPath?: string;
  cardType?: cardType;
}

const WidgetContainer = styled(BaseView)`
  margin-bottom: 15px;
`;
const Widget = ({ name, bgColor, textColor, iconPath, cardType }: IWidget) => {
  return (
    <WidgetContainer>
      <BaseCard bgColor={bgColor} cardType={cardType}>
        <View style={{ position: "absolute", bottom: 5, right: 20 }}>
          {name ? (
            <BaseText
              style={{
                color: textColor,
                fontSize: 80,
                fontWeight: 600,
              }}
            >
              {name}
            </BaseText>
          ) : (
            <Image
              style={{ width: 80, height: 80, bottom: 10 }}
              source={iconPath}
            ></Image>
          )}
        </View>
      </BaseCard>
    </WidgetContainer>
  );
};

export default Widget;
