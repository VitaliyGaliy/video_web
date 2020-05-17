import * as React from "react";
import { useState, useRef } from "react";
import crossBtn from "../../assets/images/crossBtn.png";
import Button from "../Buttons/Button";

import "./index.scss";

interface Props {
  children?: object;
}

const Modal = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundEl = useRef(null);
  const crossdEl = useRef(null);
  const handleOpenModal = (e) => {
    if (e.target !== backgroundEl.current && e.target !== crossdEl.current)
      return;
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div
          onClick={handleOpenModal}
          ref={backgroundEl}
          className="modal_background"
        >
          <div className="modal_container">
            <div className="modal_mainCamIcon">
              <img
                onClick={handleOpenModal}
                ref={crossdEl}
                src={crossBtn}
                alt="video"
              />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
