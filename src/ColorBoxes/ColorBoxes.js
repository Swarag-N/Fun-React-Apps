import React, { Component } from 'react'
import Box from './Box'
import './ColorBox.css'
class ColorBoxes extends Component{
    // constructor(props){
    //     super(props)
    // }
    static defaultProps = { nBoxes: 18 } 
    render(){
        // let str = []
        // for(let i=0;i<this.props.nBoxes;i++){
        //     str.push(<Box/>)
        // }
        let boxes = Array.from({length:this.props.nBoxes})
                        .map(()=>(<Box/>))
        return(
            <div>
                <h1>Diffrent Colours</h1>
            <div className="colorBoxes">
                {boxes}
            </div>
            </div>
        )
    }
}

export default ColorBoxes