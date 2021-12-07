import React, { useState } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
  PhoneNumberInput,
} from "../ui";
import { INITIAL_FORM_REGISTER } from "../../utils/constants";
import { TInfoDataWPassword } from "../../utils/types/data";
import styles from "./profile.module.css";

const Profile = () => {
  const [form, setForm] = useState<TInfoDataWPassword>(INITIAL_FORM_REGISTER);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, type, checked } = e.target;
    const value = type === "checked" ? checked : e.target.value;
    setForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const onReset = () => {
    setForm(INITIAL_FORM_REGISTER);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onReset();
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.forms} onSubmit={onSubmit}>
        <Input
          type="text"
          onChange={onFieldChange}
          value={form.fullName}
          name="fullName"
          size="default"
          placeholder="ФИО"
        />
        <PhoneNumberInput
          onChange={onFieldChange}
          value={form.tel}
          name="tel"
          size="default"
        />
        <EmailInput
          onChange={onFieldChange}
          value={form.email}
          name="email"
          size="default"
        />
        <PasswordInput
          value={form.password}
          name="password"
          onChange={onFieldChange}
          size="default"
        />
        <div className={styles.button_container}>
          <Button>Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
