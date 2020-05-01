import React, { Component } from 'react'

class Coin extends Component{
    render(){
        let data = [
            ["Tail", "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=816129de449b3c35dfb2f91720a5147e6c3364c4-1588321043-0-AZErOGnm7Tx8VAdUzkqRB9shsA7MwgKFaBdP9nAf69rmCU1O7k_LWFjLPuC90Ix9Va4PLy6Nx4N04PNYuaJyTj80lwhb3Cx_DcG5wFqZoLaDAJsSkjd-LZ1Yr97c0eksG1MJtBkljFLwhz0nQzxxWB9hYKrdD6UokcnyAJO64UX89-9trvpP-4fLhMjDPbJP87_4avMC8Bfw4QlhnBgMfJDqSZtkgBhwySr8tg7GDNj_VM5yvGo2z6S8lY6VmeqM461-wvtxwAqwN_fMPq9wXLrtlka7IYLCPWq68Wf9J7p7t_2nK02q7J6RwNLUCInFxg"],
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