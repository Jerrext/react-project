import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Form.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type FormProps = {
  children: ReactNode;
}

const Form: FC<FormProps> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.formWrapper, {
        [styles.darkWrapper]: theme === Theme.Dark,
      })}>
        {children}
      </div>
    </div>
  );
};

export default Form;
