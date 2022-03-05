import { Modal } from "antd";
import React, { useState } from "react";
import Draggable from "react-draggable";
import "./ButtonModal.css";

const ModalDragDrop = ({ labelTitle, children, ...otherProps }: any) => {
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState<{
    left: number;
    top: number;
    right: number;
    bottom: number;
  }>({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = React.createRef<HTMLDivElement>();

  const onStart = (event: any, uiData: any) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = draggleRef?.current?.getBoundingClientRect() as {
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    });
  };

  return (
    <Modal
      title={
        <div
          style={{
            width: "100%",
            cursor: "move",
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          {labelTitle}
        </div>
      }
      {...otherProps}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div className="modalDragDropCustom" ref={draggleRef}>
            {modal}
          </div>
        </Draggable>
      )}
    >
      {children}
    </Modal>
  );
};

export default ModalDragDrop;
