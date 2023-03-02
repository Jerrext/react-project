import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import styles from "./Tabs.module.scss";
import { TabsNames, TabsProps} from "./types";
import { Theme, useThemeContext } from "../../context/Theme/Context";



const Tabs: FC<TabsProps> = ({ tabsList, onClick, activeTab }) => {
  const onTabClick = (key: TabsNames) => () => onClick(key)
  const { theme } = useThemeContext();
  return (
    <div className={classNames(styles.wrapper, {
      [styles.darkWrapper]: theme === Theme.Dark,
    })}>
      {tabsList.map((tab) => {
        return (
          <div
            key={tab.key}
            className={classNames(styles.tab, {
              [styles.activeTab]: activeTab === tab.key,
              [styles.disabled]: tab.disabled,
            })}
            onClick={tab.disabled ? undefined : onTabClick(tab.key)}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
