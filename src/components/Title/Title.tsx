import React, { FC } from "react";
import styles from "./Title.module.scss";

type TitleProps = {
  title: string;
  className?: string;
};

const Title: FC<TitleProps> = ({ title, className }) => {
  return <h1 className={`${styles.title} ${className}`}>{title}</h1>;
};

export default Title;
