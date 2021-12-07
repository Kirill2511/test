import React, { useState } from "react";
import styles from "./subscription.module.css";
import SubscriptionItem from "./subscription-item/subscription-item";

const Subscription = () => {
  const [valueEmail, setValueEmail] = useState(true);
  const [valueTelegram, setValueTelegram] = useState(true);
  const [valueViber, setValueViber] = useState(false);

  return (
    <div className={styles.subscription}>
      <SubscriptionItem
        title="Подписка 1"
        nameEmail="Эл. почта"
        isOnEmail={valueEmail}
        onChangeEmail={() => setValueEmail(!valueEmail)}
        nameTelegram="Telegram"
        isOnTelegram={valueTelegram}
        onChangeTelegram={() => setValueTelegram(!valueTelegram)}
        nameViber="Viber"
        isOnViber={valueViber}
        onChangeViber={() => setValueViber(!valueViber)}
      />
      <SubscriptionItem
        title="Подписка 2"
        nameEmail="Эл. почта"
        isOnEmail={valueEmail}
        onChangeEmail={() => setValueEmail(!valueEmail)}
        nameTelegram="Telegram"
        isOnTelegram={valueTelegram}
        onChangeTelegram={() => setValueTelegram(!valueTelegram)}
        nameViber="Viber"
        isOnViber={valueViber}
        onChangeViber={() => setValueViber(!valueViber)}
      />
      <SubscriptionItem
        title="Подписка 3"
        nameEmail="Эл. почта"
        isOnEmail={valueEmail}
        onChangeEmail={() => setValueEmail(!valueEmail)}
        nameTelegram="Telegram"
        isOnTelegram={valueTelegram}
        onChangeTelegram={() => setValueTelegram(!valueTelegram)}
        nameViber="Viber"
        isOnViber={valueViber}
        onChangeViber={() => setValueViber(!valueViber)}
      />
    </div>
  );
};

export default Subscription;
