import React, { Component } from 'react'
import LottoBall from './Ball';
import "./Lottory.css"

import Button from '@material-ui/core/Button';

class Lottory extends Component{
    constructor(props){
        super(props)
        this.state={
            num :Array.from({length:this.props.numB}).map(()=>("-"))
        }
        this.newNum = this.newNum.bind(this)
    }

    static defaultProps ={
        maxNum :40,
        numB:6
    }

    newNum(){
        let test = [];
        for(let i=0;i<this.props.numB;i++){
            test.push(Math.floor(Math.random()*this.props.maxNum))
        }
        this.setState({num:[...test]})
    }
    render(){
        return (
            <div className='Lottory'>
                <h1> Genetrate Six Random Numbers</h1>
                <div className="Lottory-balls">
                {this.state.num.map((n,i) => <LottoBall num={n} key={i}/>)}
                </div>
            <Button variant="contained" onClick={this.newNum}>Change</Button>
            </div>
        )
    }
} 

export default Lottory