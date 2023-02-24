import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import styles from "./Tabs.module.scss";
import { TabsNames, TabType } from "./types";

type TabsProps = {
  tabsList: TabType[];
  onTabClick: (key: TabsNames) => () => void; // не уверен я что-то в этой записи, но вроде ошибок нет
  activeTab: number;
};

const Tabs: FC<TabsProps> = ({ tabsList, onTabClick, activeTab }) => {
  return (
    <div className={styles.container}>
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
