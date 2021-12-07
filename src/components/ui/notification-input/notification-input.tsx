import React from "react";
import styles from "./notification-input.module.css";
import Gear from "../../../images/Gear.svg";

const NotificationInput = ({
  openModal,
}: {
  openModal(e: React.MouseEvent<HTMLButtonElement>): void;
}) => {
  return (
    <div className={styles.notifications__container}>
      <button className={styles.notifications__button} onClick={openModal}>
        <div className={styles.notifications__image}>
          <img src={Gear} className={styles.notifications__icon} alt="icon" />
        </div>
        <p className={styles.notifications__text}>Настройка уведомлений</p>
      </button>
    </div>
  );
};

export default NotificationInput;
