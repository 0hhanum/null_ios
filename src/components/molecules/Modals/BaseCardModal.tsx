import React from "react";
import BaseModal, { IBaseModal } from "components/atoms/Modals/BaseModal";
import BaseCard from "../Cards/BaseCard";
import { DimensionValue, ViewStyle } from "react-native";

interface IBaseCardModal extends IBaseModal {
  height?: DimensionValue;
  width?: DimensionValue;
  cardStyle?: ViewStyle;
}

const BaseCardModal = ({
  children,
  width,
  height,
  cardStyle,
  ...props
}: IBaseCardModal) => {
  return (
    <BaseModal {...props}>
      <BaseCard
        cardType="largeSquare"
        trafficLight={true}
        style={{
          shadowColor: "#000000",
          shadowOffset: { width: 2, height: 5 },
          shadowOpacity: 0.7,
          shadowRadius: 2,
          elevation: 2,
          height,
          ...(width !== undefined && { width }), // Include width if it is defined
          ...cardStyle,
        }}
      >
        {children}
      </BaseCard>
    </BaseModal>
  );
};

export default BaseCardModal;
