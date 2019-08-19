import React, { Component } from 'react'

import { Container } from './styles'

import Die from './Die';

export class DiceGame extends Component {
    state = {
        dice1: 1,
        dice2: 2,
        rolling: false
    }

    handleClick = e => {
        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;

        this.setState({ rolling: true })

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)

        this.setState({ dice1: random1, dice2: random2 })
    }

    render() {
        return (
            <Container>
                <div>
                    <div>
                        <Die dice={this.state.dice1} rolling={this.state.rolling} />
                    </div>
                    <div>
                        <Die dice={this.state.dice2} rolling={this.state.rolling} />
                    </div>
                </div>

                {this.state.rolling ?
                    <button disabled={true}>Rolling</button> 
                    : 
                    <button onClick={this.handleClick}>Roll!</button>}
            </Container>
        )
    }
}

export default DiceGame
