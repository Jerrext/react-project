import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { ButtonType } from './components/Button/Button';
import UserName from './components/UserName';
import Title from './components/Title';

const App = () => {
  return (
    <div className="App">
      <Button title={"Primary"} type={ButtonType.Primary} onClick={() => {}} />
      <Button title={"Secondary"} type={ButtonType.Secondary} onClick={() => {}} />
      <Button title={"Error"} type={ButtonType.Error} onClick={() => {}} />
      <UserName userName='Artem Malkin' />
      <Title />
    </div>
  );
}

export default App;
