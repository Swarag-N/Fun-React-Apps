import React, { Component } from 'react'

class LottoBall extends Component{
    render(){
        return(
            <p>
                <h1>{this.props.num}</h1>
            </p>
        )
    }
}

export default LottoBall