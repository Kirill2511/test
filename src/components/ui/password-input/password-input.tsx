import React, { useRef, useState } from "react";
import { Input } from "../index";

const PasswordInput = ({
  value,
  onChange,
  name,
  size,
}: {
  value: string;
  name: string;
  size?: "default" | "small";
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  const [fieldDisabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onIconsClick = () => {
    setVisible(true);
    setDisabled(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const validateField = (value: string) => {
    setError(value.length < 6);
  };

  const onFocus = () => {
    setError(false);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      validateField(e.target.value);
    } else {
      setError(false);
    }
    setVisible(false);
    setDisabled(true);
  };

  return (
    <Input
      type={visible ? "text" : "password"}
      placeholder="Пароль"
      onChange={onChange}
      text={"Изменить"}
      value={value}
      ref={inputRef}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      error={error}
      onIconClick={onIconsClick}
      disabled={fieldDisabled}
      errorText={"Некорректный пароль"}
      size={size === "small" ? "small" : "default"}
    />
  );
};

export default PasswordInput;
