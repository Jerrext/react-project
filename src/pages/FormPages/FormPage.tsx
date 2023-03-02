import React, { ReactNode, FC } from "react";
import classNames from "classnames";
import Title from "../../components/Title";
import styles from "./FormPage.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type FormPageProps = {
  children: ReactNode;
  titleFormPage: string;
}

const FormPage: FC<FormPageProps> = ({children, titleFormPage}) => {
  const { theme } = useThemeContext();
  return (
    <>
      <div className={classNames(styles.wrapper, {
        [styles.darkWrapper]: theme === Theme.Dark,
      })}>
        <div className={styles.btnHome}>Back to home</div>
        <Title title={titleFormPage} className={styles.title}/>
        {children}
      </div>
    </>
  );
};

export default FormPage;
