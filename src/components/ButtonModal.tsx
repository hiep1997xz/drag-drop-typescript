import { Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./ButtonModal.css";
import ModalDragDrop from "./CommonDragDrop";

const ButtonModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="button" onClick={showModal}>
        Open Modal
      </Button>
      <ModalDragDrop
        labelTitle="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalDragDrop>
    </>
  );
};

export default ButtonModal;
