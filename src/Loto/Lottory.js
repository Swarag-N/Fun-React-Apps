import React, { Component } from 'react'
import LottoBall from './Ball';
import "./Lottory.css"
class Lottory extends Component{
    constructor(props){
        super(props)
        this.state={
            num :Array.from({length:this.props.numB})
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
                {this.state.num.map(n => <LottoBall num={n}/>)}
                </div>
            <button onClick={this.newNum}>Change</button>
            </div>
        )
    }
} 

export default Lottory