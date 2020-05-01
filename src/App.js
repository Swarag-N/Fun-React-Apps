import React from 'react';
// import Clicker from './Clicker/Clicker'
import Die from './Dice/Die';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clicker /> */}
        <Die  face='one'/>
        <Die  face='six'/>
      </header>
    </div>
  );
}

export default App;
