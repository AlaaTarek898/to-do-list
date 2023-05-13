import { Fragment } from "react";
import styles from "./Modal.module.css";

import { createPortal } from "react-dom";

import Form from "../Layout/Form.js";
import Button from "../Layout/Button.js";
const Backdrop = ({ show, close }) => {
  return (
    <div
      className={`${styles.backdrop} ${show ? styles.showbackdrop : null}`}
      onClick={() => close()}
    ></div>
  );
};
const Overlay = ({ children, show }) => {
  return (
    <Fragment>
      <div className={`${styles.overlay} ${show ? styles.showoverlay : null}`}>
        {children}
      </div>
    </Fragment>
  );
};
const Modal = ({ children, showModal, closeModal }) => {
  return (
    <Fragment>
      {createPortal(
        <Fragment>
          <Backdrop show={showModal} close={closeModal} />
          <Overlay show={showModal}>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
