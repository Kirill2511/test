import React from "react";
import styles from "./subscription-email.module.css";
import EmailIcon from "../../../images/Email.svg";
import Switch from "../switch/switch";

const SubscriptionEmail = ({
  nameEmail,
  isOnEmail,
  onChangeEmail,
}: {
  nameEmail: string;
  isOnEmail: boolean;
  onChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <div className={styles.email__switch_container}>
      <div className={styles.email__image}>
        <img src={EmailIcon} className={styles.email__icon} alt="icon" />
      </div>
      <span className={styles.email__text}>{nameEmail}</span>
      <div className={styles.email__switch}>
        <Switch
          onChange={onChangeEmail}
          isOn={isOnEmail}
          onColorBack="rgba(246, 23, 90, 0.2)"
          onColorFront="#F6175A"
          id="switch-email"
        />
      </div>
    </div>
  );
};

export default SubscriptionEmail;
