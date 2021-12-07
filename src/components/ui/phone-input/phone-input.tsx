import React, { useRef, useState } from "react";
import { Input } from "../index";

const validatePhone = (tel: string) => {
  const re = /(7|8|9)\d{9}$/;
  return re.test(tel);
};

const PhoneNumberInput = ({
  value,
  onChange,
  name,
  size = "default",
}: {
  value: string;
  name: string;
  size?: "default" | "small";
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateField = (value: string) => {
    setError(!validatePhone(value));
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
  };

  return (
    <Input
      type="tel"
      placeholder="Ваш телефон"
      onChange={onChange}
      value={value}
      ref={inputRef}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      error={error}
      errorText={"Ой, неверно введен телефон!"}
      size={size}
    />
  );
};

/* const PhoneNumberInput = () => {
  const [value, setValue] = useState(null);

  return (
    <div className={styles.phoneInput__container}>
      <div className={`${styles.phoneInput} ${styles.phoneInput_size_default}`}>
        <label
          className={`${styles.phoneInput__placeholder} text noselect text_type_label_default`}
        >
          Мобильный телефон
        </label>
        <PhoneInput
          placeholder="Ваш телефон"
          international={false}
          value={value}
          onChange={setValue}
          className={styles.phoneInput__input}
          limitMaxLength={true}
        />
      </div>
    </div>
  );
};*/

export default PhoneNumberInput;
