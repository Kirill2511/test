import React, { useCallback, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import "./input.css";

type TInputInterface = {
  type?: "text" | "password" | "email" | "tel" | "button";
  placeholder?: string;
  value?: string;
  name?: string;
  error?: boolean;
  disabled?: boolean;
  text?: string;
  errorText?: string;
  size?: "default" | "small";
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onTextClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
};

function useCombinedRefs<T = HTMLElement>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.MutableRefObject<T | null> {
  const targetRef = React.useRef<T>(null);
  React.useEffect(() => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, TInputInterface>(
  (
    {
      type,
      placeholder,
      value,
      name,
      text,
      error,
      disabled,
      errorText,
      size = "default",
      onChange,
      onBlur,
      onFocus,
      onTextClick,
    },
    forwardRef
  ) => {
    const [focus, setFocus] = useState(false);
    const innerRef = useRef<HTMLInputElement>(null);
    const ref = useCombinedRefs<HTMLInputElement>(innerRef, forwardRef);

    const handleInputFocus = useCallback(
      (e?: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        if (typeof onFocus === "function") {
          onFocus(e);
        }
      },
      [setFocus, onFocus]
    );

    const forceFocus = useCallback(() => {
      ref?.current?.focus();
    }, [ref]);

    const handleInputBlur = useCallback(
      (e?: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        if (typeof onBlur === "function") {
          onBlur(e);
        }
      },
      [setFocus, onBlur]
    );

    const onItemClick = useCallback(
      (e?: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (typeof onItemClick === "function") {
          onTextClick(e);
        } else {
          forceFocus();
        }
      },
      [onTextClick, forceFocus]
    );

    const onTextClickProxy = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (typeof onTextClick === "function") {
          onTextClick(e);
        } else {
          forceFocus();
        }
      },
      [onTextClick, forceFocus]
    );

    const textToRender = useMemo(() => {
      // eslint-disable-next-line import/namespace
      const Icon = text;
      const hasAction = typeof onTextClick === "function";
      const dumbIcon = disabled && !hasAction;

      return Icon ? (
        <div
          className={clsx("input__text", {
            ["input__text-action"]: hasAction,
            ["input__text-disabled"]: dumbIcon,
          })}
          onClick={onTextClickProxy}
        >
          {text}
        </div>
      ) : null;
    }, [text, onTextClickProxy, disabled, onTextClick]);

    const onWrapperClick = useCallback(() => {
      forceFocus();
    }, [forceFocus]);

    const errorToRender = useMemo(
      () =>
        error &&
        errorText && (
          <p
            className={clsx("input__error", {
              [`text_type_main-${size}`]: size,
            })}
          >
            {errorText}
          </p>
        ),
      [error, errorText, size]
    );

    return (
      <div className={"input__container"}>
        <div
          className={clsx("input", {
            [`input_type_${type}`]: type,
            [`input_size_${size}`]: size,
            ["input_status_error"]: error,
            ["input_status_disabled"]: disabled,
            ["input_status_active"]: focus,
          })}
          onClick={onWrapperClick}
        >
          <label
            className={clsx(
              "input__placeholder text noselect text_type_label_default",
              {
                ["input__placeholder-focused"]: focus,
                ["input__placeholder-filled"]: value,
                ["input__placeholder-disabled"]: disabled,
              }
            )}
          >
            {placeholder}
          </label>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={clsx("text", "input__textfield", {
              [`text_type_main-${size}`]: size,
              ["input__textfield-disabled"]: disabled,
            })}
            type={type}
            ref={ref}
            onChange={onChange}
            name={name}
            value={value}
            disabled={disabled}
          />
          {textToRender}
        </div>
        {errorToRender}
      </div>
    );
  }
);

export default Input;
