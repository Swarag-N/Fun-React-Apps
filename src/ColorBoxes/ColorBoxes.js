import React, { Component } from 'react'

import Box from './Box'
import './ColorBox.css'

class ColorBoxes extends Component{
    static defaultProps = { nBoxes: 18 } 
    render(){
        let boxes = Array.from({length:this.props.nBoxes}).map((_,i)=>(<Box key={i}/>))
        return(
            <div>
                <h1>Diffrent Colours</h1>
                <p>Click To change Colors</p>
            <div className="colorBoxes">{boxes}</div>
            </div>
        )
    }
}

export default ColorBoxes