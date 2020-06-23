import React from 'react';
import Clicker from './Clicker/Clicker'
import RollDie from './Dice/RollDie';
import Lottory from './Loto/Lottory';
import Flip from './Flip/Flip'
import ColorBoxes from './ColorBoxes/ColorBoxes'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ColorBoxes/>
        <hr className="style-seven"/>
        <Flip/>
        <hr/>
        <Lottory />
        <hr/>
        <RollDie/>
        <hr/>
        <Clicker/>
        <hr/>
    </div>
  );
}

export default App;
