import React, { Component } from 'react'
import './Ball.css'

class LottoBall extends Component{
    render(){
        return(
            <div className="circle">
                <h1>{this.props.num}</h1>
            </div>
        )
    }
}

export default LottoBall