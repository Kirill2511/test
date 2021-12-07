import { CloseIcon } from "../ui";
import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";

interface IModal {
  modalTitle: string;
  closeModal: () => void;
}

const Modal: FC<IModal> = ({ children, closeModal, modalTitle }) => {
  const closeModalByEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    e.stopImmediatePropagation();
  };
  useEffect(() => {
    document.addEventListener("keydown", closeModalByEscKey);
    return () => {
      document.removeEventListener("keydown", closeModalByEscKey);
    };
  }, []);

  const modalRoot = document.querySelector("#app-modals");

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={closeModal} />
      <section className={styles.modal}>
        <div className={`${styles.header}`}>
          <h2 className={styles.title}>{modalTitle}</h2>
          <CloseIcon onClick={closeModal} type="default" />
        </div>
        {children}
      </section>
    </>,
    modalRoot
  );
};

export default Modal;
