import React, { Component } from 'react'

class Coin extends Component{
    render(){
        let data = [
            ["Tail", "https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png"],
            ["Head","https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"]
        ]
        return (
            <div className="Coin">
            <h1>{data[this.props.flag][0]}</h1>
            <img src={data[this.props.flag][1]} alt={this.props.flag?"Head":"Tail"} height="100" width="100"></img>
            </div>
            
        )
    }
}

export default Coin