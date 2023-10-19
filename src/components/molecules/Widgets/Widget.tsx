import React from "react";
import BaseCard from "../Cards/BaseCard";
import BaseText from "components/atoms/Texts/BaseText";

interface IWidget {
  name?: string;
  bgColor: string;
  textColor?: string;
  icon?: React.JSX.Element;
}
const Widget = ({ name, bgColor, textColor, icon }: IWidget) => {
  return (
    <BaseCard bgColor={bgColor}>
      {name ? (
        <BaseText
          style={{
            color: textColor,
            fontSize: 72,
            fontWeight: 700,
            position: "absolute",
            bottom: 10,
            right: 20,
          }}
        >
          {name}
        </BaseText>
      ) : (
        icon
      )}
    </BaseCard>
  );
};

export default Widget;
