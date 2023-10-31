import React from "react";
import BaseCard, { cardType } from "../Cards/BaseCard";
import BaseText from "components/atoms/Texts/BaseText";
import { Image } from "expo-image";
import { View } from "react-native";
import { category } from "types/quizzes/quizTypes";

interface IWidgetComponent {
  category: category;
  cardType?: cardType;
}
interface IWidget {
  name?: string;
  bgColor: string;
  textColor?: string;
  iconPath?: string;
}
type widgets = Record<category, IWidget>;
const widgets: widgets = {
  fe: {
    bgColor: "white",
    name: "FE",
  },
  js: {
    name: "JS",
    bgColor: "#f7df1e",
  },
  ts: {
    name: "TS",
    bgColor: "#007acc",
    textColor: "white",
  },
  react: {
    name: "React",
    iconPath: require("@assets/images/logos/svgs/react.svg"),
    bgColor: "#61DBFB",
  },
  cs: { bgColor: "blue", name: "CS" },
};
const Widget = ({ category, cardType }: IWidgetComponent) => {
  const { name, bgColor, textColor, iconPath } = widgets[category];
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
              fontWeight: "600",
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
