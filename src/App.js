import React,{useState} from 'react';
import {Route,Switch,HashRouter} from 'react-router-dom'

import Paper from '@material-ui/core/Paper';


import Navbar from './IndexFiles/NavBar'
import DrawerComponent from "./IndexFiles/DrawerComponent";
import Clicker from './Clicker/Clicker'
import RollDie from './Dice/RollDie';
import Lottory from './Loto/Lottory';
import Flip from './Flip/Flip'
import ColorBoxes from './ColorBoxes/ColorBoxes'

import './App.css';


function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
  return (
    <HashRouter>
    <div className="App">
      <Navbar handleDrawerOpen={handleDrawerOpen}/>
      <DrawerComponent handleDrawerClose={handleDrawerClose} open={open}/>
      <Switch>
      <Paper style={{padding:"2rem",maxWidth:"60%"}}>
        <Route exact default path='/color'component={ColorBoxes}/>
        <Route exact path='/flip'component={Flip}/>
        <Route exact path='/lottory'component={Lottory }/>
        <Route exact path='/rolldie'component={RollDie}/>
        <Route exact path='/click'component={Clicker}/>
        <Route/>
      </Paper>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
