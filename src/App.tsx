import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button, { ButtonType } from "./components/Button";
import UserName from "./components/UserName";
import Title from "./components/Title";
import Tabs from "./components/Tabs";
import MenuButton from "./components/MenuButton";
import Card from "./components/Card";
import { CardSize } from "./components/Card/types";
import Input from "./components/Input";

const MOCK_CARD = {
  id: 0,
  image:
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "12-10-2023",
  lesson_num: 12,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  description: "Описание поста",
  author: 10,
};

const App = () => {
  return (
    <div className="App">
      <Button title={"Primary"} type={ButtonType.Primary} onClick={() => {}} />
      <Button title={"Secondary"} type={ButtonType.Secondary} onClick={() => {}} />
      <Button title={"Error"} type={ButtonType.Error} onClick={() => {}} />
      <UserName userName="Artem Malkin" />
      <Title />
      <Tabs />
      <MenuButton />
      <Card card={MOCK_CARD} size={CardSize.Large} />
      <Card card={MOCK_CARD} size={CardSize.Medium} />
      <Card card={MOCK_CARD} size={CardSize.Small} />
      <Input title="Title" placeholder="Placeholder" />
      <Input title="Title" placeholder="Placeholder" disabled />
      <Input title="Title" placeholder="Placeholder" errText />
    </div>
  );
};

export default App;
