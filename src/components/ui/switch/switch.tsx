import React from "react";
import "./switch.css";

const Switch = ({
  isOn,
  onChange,
  onColorBack,
  onColorFront,
}: {
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
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColorBack }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
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
