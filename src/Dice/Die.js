import React, { Component } from 'react'
import './Die.css'

class Die extends Component{
    render(){
        console.log(`fa-dice-${this.props.face}`)
        return (
            <i class={` Die fas fa-dice-${this.props.face}`}></i>
        )
    }
}

export default Die