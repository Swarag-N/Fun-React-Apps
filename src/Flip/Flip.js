import React, { Component } from "react";
import Coin from './Coin'
import './Flip.css'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';

class Filp extends Component {
  constructor(props){
    super(props)
    this.state = {
      numOfFlips : 0,
      headCount : 0,
      tailCount : 0,
      current:null
    }
    this.flipFlag = this.flipFlag.bind(this)
  }
  flipFlag(){
    let ans = (Math.floor(Math.random()*2))
    ans?this.setState({headCount:this.state.headCount+1}):this.setState({tailCount:this.state.tailCount+1});
    this.setState({numOfFlips:this.state.numOfFlips+1,current:ans})
  }
  render() {
    return (
      <div className="Flip">
        <h1>Flip a Coin</h1>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Number Of Flips
              </TableCell>
              <TableCell>
                Heads
              </TableCell>
              <TableCell>
                Tails
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
              {this.state.numOfFlips}
              </TableCell>
              <TableCell>
              {this.state.headCount}
              </TableCell>
              <TableCell>
              {this.state.tailCount}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
        
        <Button  style={{marginTop:"1em"}}variant="contained" onClick={this.flipFlag}>Change</Button>
        {this.state.current!=null && <Coin flag={this.state.current}/>}
      </div>
    )

  }
}

export default Filp;
