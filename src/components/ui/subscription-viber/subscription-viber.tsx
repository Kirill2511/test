import React from "react";
import styles from "./subscription-viber.module.css";
import ViberIcon from "../../../images/WhatsappLogo.svg";
import Switch from "../switch/switch";

const SubscriptionEmail = ({
  nameViber,
  isOnViber,
  onChangeViber,
}: {
  nameViber: string;
  isOnViber: boolean;
  onChangeViber(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <div className={styles.viber__switch_container}>
      <div className={styles.viber__image}>
        <img src={ViberIcon} className={styles.viber__icon} alt="icon" />
      </div>
      <span className={styles.viber__text}>{nameViber}</span>
      <div className={styles.viber__switch}>
        <Switch
          onChange={onChangeViber}
          isOn={isOnViber}
          onColorBack="rgba(246, 23, 90, 0.2)"
          onColorFront="#F6175A"
        />
      </div>
    </div>
  );
};

export default SubscriptionEmail;
