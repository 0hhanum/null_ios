import React from "react";
import BaseCard, { cardType } from "../Cards/BaseCard";
import BaseText from "components/atoms/Texts/BaseText";
import { Image } from "expo-image";
import { View } from "react-native";
import { category } from "types/quizzes/quizTypes";
import { getWindowRatio, getWindowSize } from "components/utils";

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
const LARGE_TEXT_THRESHOLD = 800;
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
  dev: { bgColor: "blue", name: "Dev" },
};
const Widget = ({ category, cardType }: IWidgetComponent) => {
  const { name, bgColor, textColor, iconPath } = widgets[category];
  const { heightRatio } = getWindowRatio();
  const { height } = getWindowSize();
  return (
    <BaseCard bgColor={bgColor} cardType={cardType}>
      <View
        style={{ position: "absolute", bottom: 5 * heightRatio, right: 20 }}
      >
        {iconPath ? (
          <Image
            style={{
              width: 80,
              height: 80,
              bottom: height > LARGE_TEXT_THRESHOLD ? 10 * heightRatio : 0,
            }}
            source={iconPath}
          />
        ) : (
          <BaseText
            size={80}
            style={{
              color: textColor,
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
