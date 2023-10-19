import React from "react";
import BaseCard, { cardType } from "../Cards/BaseCard";
import BaseText from "components/atoms/Texts/BaseText";
import { Image } from "expo-image";
import { View } from "react-native";

export interface IWidget {
  name?: string;
  bgColor: string;
  textColor?: string;
  iconPath?: string;
  cardType?: cardType;
}

const Widget = ({ name, bgColor, textColor, iconPath, cardType }: IWidget) => {
  return (
    <BaseCard bgColor={bgColor} cardType={cardType}>
      <View style={{ position: "absolute", bottom: 5, right: 20 }}>
        {iconPath ? (
          <Image
            style={{ width: 80, height: 80, bottom: 10 }}
            source={iconPath}
          />
        ) : (
          <BaseText
            style={{
              color: textColor,
              fontSize: 80,
              fontWeight: 600,
            }}
          >
            {name}
          </BaseText>
        )}
      </View>
    </BaseCard>
  );
};

export default Widget;
