import React, { Component } from 'react'
import Die from './Die'
import './RollDie.css'

class RollDie extends Component{
    constructor(props) {
        super(props)
        this.state = {
            currentNum1 : 'one',
            currentNum2 : 'one',
            isRolling :false
        }
        this.rand = this.rand.bind(this)

    }
    static defaultProps= {
        num : ['one','two','three','four','five','six'],
    }

    rand = ()=>{
        let prsntNum1 = this.props.num[Math.floor(Math.random()*this.props.num.length)]
        let prsntNum2 = this.props.num[Math.floor(Math.random()*this.props.num.length)]
        this.setState({currentNum1:prsntNum1,currentNum2:prsntNum2,isRolling:true})
        setTimeout(()=>{
            this.setState({isRolling:false})
        },1000)
    }
    render(){
        const {currentNum1,currentNum2,isRolling} = this.state;
        return (
            <div className="RollDie">
                <h1>Roll Dice</h1>
                <Die face={currentNum1} roll={isRolling}/>
                <Die face={currentNum2} roll={isRolling}/>
                <h1>Die Rolled {currentNum1}&{currentNum2}</h1>
                <button onClick={this.rand} disabled={isRolling}>Change</button>
            </div>
        )
    }
}

export default RollDie