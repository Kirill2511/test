import React, { FC, SyntheticEvent } from "react";
import styles from "./button.module.css";

const Button: FC<{
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  name?: string;
  htmlType?: "button" | "submit" | "reset";
}> = ({ children, onClick, name, htmlType }) => {
  const className = `${styles.button} ${styles.button_text} ${styles.button_type}`;
  return (
    <button type={htmlType} name={name} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
