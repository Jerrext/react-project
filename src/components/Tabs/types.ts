export enum TabsNames {
  All,
  Favorites,
  Popular,
}

export type TabType = {
  title: string;
  disabled: boolean;
  key: number;
};

export type TabsProps = {
  tabsList: TabType[];
  onClick: (key: TabsNames) => void;
  activeTab: number;
};