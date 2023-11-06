import React from "react";
import { Modal, ModalProps } from "react-native";
import styled from "styled-components/native";

export interface IBaseModal extends ModalProps {
  visible: boolean;
  setVisible: (boolean) => void;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const BaseModal = ({ visible, setVisible, children, ...props }: IBaseModal) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {
        setVisible(false);
      }}
      transparent={true}
      {...props}
    >
      <Container>{children}</Container>
    </Modal>
  );
};

export default BaseModal;
