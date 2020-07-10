import React, { Component } from 'react'

class Clicker extends Component{
    constructor(props){
        super(props)
        this.state = {
            num : 0,
            status:false
        }
        this.eHandler = this.eHandler.bind(this)
    }

    eHandler=(e)=>{
        this.setState((state)=>{
            let randInt = Math.floor(Math.random()*10)
            if (randInt===7){
                state.status = true;
            }
            return {num:randInt}
        })
    }
    render(){
        return(
            <div className="Clicker">
                <h1>Click to Change Number</h1>
                <p>Stops at 7</p>
                <h1>{this.state.num}</h1>
                <div className="Clicker-Button">
                    {this.state.status?<h1>Game Over</h1>:<button style={{border:"none",backgroundColor:"inherit"}} onClick={this.eHandler}>Click Me</button>}
                </div>
            </div>
        )
    }

}

export default Clicker