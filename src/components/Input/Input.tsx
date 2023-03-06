import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type InputProps = {
  title: string;
  placeholder: string;
  disabled?: boolean;
  errText?: string;
  className?: string;
};

const Input: FC<InputProps> = ({ title, placeholder, disabled, errText, className }) => {
  const { theme } = useThemeContext()
  return (
    <div>
      <p className={classNames(styles.title, {
        [styles.datkTitle]: theme === Theme.Dark
      })}>{title}</p>
      <input
        className={classNames(styles.input, className, {
          [styles.disabledInp]: disabled,
          [styles.errorInput]: errText,
        })}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />  
      {errText && <p className={styles.errorText}>{errText}</p>}
    </div>
  );
};

export default Input;
