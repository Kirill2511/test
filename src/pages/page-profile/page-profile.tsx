import React, { FC, useState } from "react";
import { Button, NotificationInput } from "../../components/ui";
import Modal from "../../components/modal/modal";
import Profile from "../../components/profile/profile";
import styles from "./page-profile.module.css";
import { useNavigate } from "react-router-dom";
import Subscription from "../../components/subscription/subscription";

const PageProfile: FC = () => {
  const [visibleNotifications, setVisibleNotifications] = useState(false);
  const navigate = useNavigate();

  const openModalNotifications = () => {
    setVisibleNotifications(true);
  };

  const closeModal = () => {
    visibleNotifications && setVisibleNotifications(false);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.overlay}>
        <div className={styles.button_container}>
          <Button onClick={() => navigate(-1)}>Назад</Button>
        </div>
        <div className={styles.background}>
          <Profile />
          <NotificationInput openModal={openModalNotifications} />
          <Subscription />
        </div>
      </div>
      {visibleNotifications && (
        <Modal modalTitle="Какие то настройки" closeModal={closeModal} />
      )}
    </div>
  );
};

export default PageProfile;
