import React, { Component } from 'react'
import LotteryBall from './LotteryBall';

import { Container } from './styles'


export class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNumbers: 40
    }

    state = { nums: Array.from({length: this.props.maxBalls}) }

    generate() {
        this.setState(currentState => ({
            nums: currentState.nums.map(n => Math.floor(Math.random() * this.props.maxNumbers) + 1)
        }))
    }

    handleClick = e => {
        this.generate()
    }

    render() {
        return (
            <Container>
                <h2>{this.props.title}</h2>
                <div>
                    {this.state.nums.map(n => <LotteryBall number={n} />)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </Container>
        )
    }
}

export default Lottery
