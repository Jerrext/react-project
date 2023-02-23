import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
  title: string;
  placeholder: string;
  disabled?: boolean;
  errText?: boolean;
  className?: string;
};

const Input: FC<InputProps> = ({ title, placeholder, disabled, errText, className }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <input
        // ref={textInput}
        className={classNames(styles.input, className, {
          [styles.disabledInp]: disabled,
          [styles.errorInput]: errText,
        })}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
      {errText && <p className={styles.errorText}>Error text</p>}
    </div>
  );
};

export default Input;
