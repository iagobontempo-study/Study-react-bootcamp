import React, { Component } from 'react'

import { Container } from './styles'

export class CoinFlipper extends Component {
    state = {
        count: 0,
        number: 1,
        headCount: 0,
        tailCount: 0,
    }

    headOrTail() {
        let generatedNumber = Math.round(Math.random() * 1) + 1;
        this.setState({...this.currentState, number: generatedNumber})
        if (generatedNumber === 1) {
            this.setState(currentState => {
                return { ...this.currentState, headCount: currentState.headCount + 1}
            })
        } else {
            this.setState(currentState => {
                return { ...this.currentState, tailCount: currentState.tailCount + 1}
            })
        }
    }

    flip() {
        this.headOrTail()
        this.setState(currentState => {
            return { ...this.currentState, count: currentState.count + 1 }
    })}

    handleClick = e => {
        this.flip()
    }

    render() {
        return (
            <Container>
                <h1>Coin flipper</h1>
                {this.state.number === 1 ? <p>HEAD</p> : <p>TAIL</p> }
                <p>You flipped {this.state.count}! Head {this.state.headCount} and Tail {this.state.tailCount}</p>
                <button onClick={this.handleClick}>Flip!</button>
            </Container>
        )
    }
}

export default CoinFlipper
