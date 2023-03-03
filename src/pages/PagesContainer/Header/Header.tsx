import React, { useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { ButtonType } from "../../../components/Button/Button";
import UserName from "../../../components/UserName";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import { RoutesList } from "../../Router";
import styles from "./Header.module.scss";
import classNames from "classnames";
import MenuButton from "../../../components/MenuButton";

const Header = () => {
  const [isOpened, setOpened] = useState(false);

  const menuButtonOnClick = () => {
    setOpened(!isOpened);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const signInBtnOnClick = () => {
    navigate(RoutesList.SignIn);
  };

  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      {
        title: "Add Post",
        key: RoutesList.Confirm,
      },
    ],
    []
  );

  return (
    <>
      <div className={styles.wrapper}>
        <MenuButton isOpened={isOpened} menuButtonOnClick={menuButtonOnClick}/>
        <UserName userName={"Artem Malkin"} />
      </div>
      {isOpened && (
        <div className={styles.menuWrapper}>
          <div>
            <UserName userName={"Artem Malkin"} />
            {navButtonsList.map(({ title, key }) => {
              return (
              <NavLink to={key} key={key} className={classNames(styles.navBtn, {
                [styles.activeNavBtn]: location.pathname === key,
              })}>
                {title}
              </NavLink>
            )})}
          </div>
          <div>
            <ThemeSwitcher />
            <Button title={"Sign In"} onClick={signInBtnOnClick} type={ButtonType.Secondary} className={styles.bottomBtn}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;