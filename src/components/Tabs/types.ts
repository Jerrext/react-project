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
