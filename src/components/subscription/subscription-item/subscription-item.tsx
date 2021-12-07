import React from "react";
import styles from "./subscription-item.module.css";
import SubscriptionEmail from "../../ui/subscription-email/subscription-email";
import SubscriptionTelegram from "../../ui/subscription-telegram/subscription-telegram";
import SubscriptionViber from "../../ui/subscription-viber/subscription-viber";

const SubscriptionItem = ({
  title,
  nameEmail,
  isOnEmail,
  onChangeEmail,
  nameTelegram,
  isOnTelegram,
  onChangeTelegram,
  nameViber,
  isOnViber,
  onChangeViber,
}: {
  title: string;
  nameEmail: string;
  nameTelegram: string;
  nameViber: string;
  isOnEmail: boolean;
  isOnTelegram: boolean;
  isOnViber: boolean;
  onChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  onChangeTelegram(e: React.ChangeEvent<HTMLInputElement>): void;
  onChangeViber(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <form className={styles.subscription__form}>
      <div className={styles.subscription__content}>
        <p className={styles.subscription__title}>{title}</p>
        <SubscriptionEmail
          nameEmail={nameEmail}
          isOnEmail={isOnEmail}
          onChangeEmail={onChangeEmail}
        />
        <SubscriptionTelegram
          nameTelegram={nameTelegram}
          isOnTelegram={isOnTelegram}
          onChangeTelegram={onChangeTelegram}
        />
        <SubscriptionViber
          nameViber={nameViber}
          isOnViber={isOnViber}
          onChangeViber={onChangeViber}
        />
      </div>
    </form>
  );
};

export default SubscriptionItem;
