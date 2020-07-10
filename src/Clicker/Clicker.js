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
                <h1>Count Clicks</h1>
                <h1>{this.state.num}</h1>
                <div className="Clicker-Button">
                    {this.state.status?<h1>Game Over</h1>:<button onClick={this.eHandler}>Click Me</button>}
                </div>
            </div>
        )
    }

}

export default Clicker