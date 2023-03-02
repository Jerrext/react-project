import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Title.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type TitleProps = {
  title: string;
  className?: string;
};

const Title: FC<TitleProps> = ({ title, className }) => {
  const { theme } = useThemeContext();
  return <h1 className={classNames(styles.title, className, {
    [styles.darkTitle]: theme === Theme.Dark,
  })}>{title}</h1>;
};

export default Title;
