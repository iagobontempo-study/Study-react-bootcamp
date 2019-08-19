import React, { Component } from 'react'

export class ClickNumber extends Component {
    state = { number: 1, won: false }

    handleClick = e => {
        let random = Math.floor(Math.random() * 10) + 1; 
        this.setState({ number: random })
        if (random === 7) {
            this.setState({ won: true })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>   
                {this.state.won ? <p>YOU WON!</p> : null}             
                {this.state.won ? null : <button onClick={this.handleClick}>Click!</button>}
            </div>
        )
    }
}

export default ClickNumber
