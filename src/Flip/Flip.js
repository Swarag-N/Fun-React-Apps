import React, { Component } from "react";
import Coin from './Coin'
import './Flip.css'

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
    // let ans = (Boolean(Math.floor(Math.random()*2)))
    let ans = (Math.floor(Math.random()*2))
    ans?this.setState({headCount:this.state.headCount+1}):this.setState({tailCount:this.state.tailCount+1});
    this.setState({numOfFlips:this.state.numOfFlips+1,current:ans})
    // return ans
  }
  render() {
    return (
      <div className="Flip">
        <h1>Flip a Coin</h1>
      <h2>Num of Flips: {this.state.numOfFlips} Heads: {this.state.headCount} Tails:{this.state.tailCount}</h2>
        <button onClick={this.flipFlag}>Change</button>
        {this.state.current!=null && <Coin flag={this.state.current}/>}
      </div>
    )

  }
}

export default Filp;
