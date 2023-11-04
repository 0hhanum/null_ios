import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import BaseView from "../View/BaseView";

export interface IBaseModal {
  visible: boolean;
  setVisible: (boolean) => void;
  children?: any;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const BaseModal = ({ visible, setVisible, children }: IBaseModal) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={() => {
        setVisible(false);
      }}
      transparent={true}
    >
      <Container>{children}</Container>
    </Modal>
  );
};

export default BaseModal;
