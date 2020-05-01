import React from 'react';
// import Clicker from './Clicker/Clicker'
// import RollDie from './Dice/RollDie';
// import Lottory from './Loto/Lottory';
import Flip from './Flip/Flip'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Flip/>
    </div>
  );
}

export default App;
