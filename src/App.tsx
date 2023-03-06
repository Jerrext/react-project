import React, { useState } from "react";
import classNames from "classnames";
import styles from "./App.module.scss"
import logo from "./logo.svg";
import Button, { ButtonType } from "./components/Button";
import UserName from "./components/UserName";
import Title from "./components/Title";
import Tabs from "./components/Tabs";
import MenuButton from "./components/MenuButton";
import Card from "./components/Card";
import { CardSize } from "./components/Card/types";
import Input from "./components/Input";
import Home from "./pages/Home";
import Content from "./pages/Content";
import ThemeProvider from "./context/Theme/Provider";
import { Theme } from "./context/Theme/Context";
import SignIn from "./pages/FormPages/SignIn";
import Success from "./pages/FormPages/Success";
import Router from "./pages/Router";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
