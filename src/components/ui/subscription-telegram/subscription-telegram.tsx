import React from "react";
import styles from "./subscription-telegram.module.css";
import TelegramIcon from "../../../images/TelegramLogo.svg";
import Switch from "../switch/switch";

const SubscriptionTelegram = ({
  nameTelegram,
  isOnTelegram,
  onChangeTelegram,
}: {
  nameTelegram: string;
  isOnTelegram: boolean;
  onChangeTelegram(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <div className={styles.telegram__switch_container}>
      <div className={styles.telegram__image}>
        <img src={TelegramIcon} className={styles.telegram__icon} alt="icon" />
      </div>
      <span className={styles.telegram__text}>{nameTelegram}</span>
      <div className={styles.telegram__switch}>
        <Switch
          onChange={onChangeTelegram}
          isOn={isOnTelegram}
          onColorBack="rgba(246, 23, 90, 0.2)"
          onColorFront="#F6175A"
        />
      </div>
    </div>
  );
};

export default SubscriptionTelegram;
