import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonType } from './components/Button';
import UserName from './components/UserName';
import Title from './components/Title';
import Tabs from './components/Tabs';
import MenuButton from './components/MenuButton';

const App = () => {
  return (
    <div className="App">
      <Button title={"Primary"} type={ButtonType.Primary} onClick={() => {}} />
      <Button title={"Secondary"} type={ButtonType.Secondary} onClick={() => {}} />
      <Button title={"Error"} type={ButtonType.Error} onClick={() => {}} />
      <UserName userName='Artem Malkin' />
      <Title />
      <Tabs />
      <MenuButton />
    </div>
  );
}

export default App;
