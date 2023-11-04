import React from "react";
import BaseModal, { IBaseModal } from "components/atoms/Modals/BaseModal";
import BaseCard from "../Cards/BaseCard";
import { View } from "react-native";

const BaseCardModal = ({ children, ...props }: IBaseModal) => {
  return (
    <BaseModal {...props}>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <BaseCard cardType="largeSquare" trafficLight={true}>
          {children}
        </BaseCard>
      </View>
    </BaseModal>
  );
};

export default BaseCardModal;
