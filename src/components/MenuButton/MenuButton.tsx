import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import styles from "./MenuButton.module.scss";
import Button, { ButtonType } from "../Button";
import { CloseMenuIcon, OpenMenuIcon } from "../../assets/icons";

const MenuButton = () => {
  const [isOpened, setOpened] = useState(false);

  const changeState = () => {
    return setOpened(!isOpened);
  };

  return (
    <Button
      className={styles.button}
      title={isOpened ? <CloseMenuIcon /> : <OpenMenuIcon />}
      type={ButtonType.Primary}
      onClick={changeState}
    />
  );
};

export default MenuButton;
