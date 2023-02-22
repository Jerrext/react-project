import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
  title: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
};

const Input: FC<InputProps> = ({ title, placeholder, disabled, className }) => {
  const [errState, setErrState] = useState(false);
  // let textInput = React.createRef<HTMLInputElement>();
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <input
        // ref={textInput}
        className={classNames(styles.input, className, {
          [styles.disabledInp]: disabled,
          [styles.errorInput]: errState,
        })}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => {
          setErrState(event.target.value === "text"); //test
        }}
      />
      <p
        className={classNames(styles.errorText, {
          [styles.showError]: errState,
        })}
      >
        Error text
      </p>
    </div>
  );
};

export default Input;
