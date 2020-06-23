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
        return (
            <div className="RollDie">
                <h1>Roll Dice</h1>
                <Die face={this.state.currentNum1} roll={this.state.isRolling}/>
                <Die face={this.state.currentNum2} roll={this.state.isRolling}/>
                <button onClick={this.rand} disabled={this.state.isRolling}>Change</button>
            </div>
        )
    }
}

export default RollDie