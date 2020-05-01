import React, { Component } from 'react'
import {colors, choiceFromArray} from './assets'
import './Box.css'
class Box extends Component{
    constructor(props){
        super(props);
        this.state={
            color:choiceFromArray(colors)
        }
        this.handelClick = this.handelClick.bind(this)
    }
    handelClick(){
        let newColor;
        do {
            newColor = choiceFromArray(colors)
        }while(newColor===this.state.color)
        this.setState({color:newColor})

    }
    render(){
        return(
            <div className="Box" style={{backgroundColor:this.state.color}} onClick={this.handelClick}>
                <h2>Box</h2>
            </div>
        )
    }
}

export default Box
