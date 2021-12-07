import React from "react";
import "./switch.css";

const Switch = ({
  id,
  isOn,
  onChange,
  onColorBack,
  onColorFront,
}: {
  id: string;
  isOn: boolean;
  onColorBack: string;
  onColorFront: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={onChange}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColorBack }}
        className="react-switch-label"
        htmlFor={id}
      >
        <span
          style={{ background: isOn && onColorFront }}
          className={`react-switch-button`}
        />
      </label>
    </>
  );
};

export default Switch;
