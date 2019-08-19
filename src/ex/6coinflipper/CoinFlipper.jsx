import React, { Component } from 'react'

import { Container } from './styles'

import Coin from './Coin'

export class CoinFlipper extends Component {
    state = {
        count: 0,
        number: 1,
        headCount: 0,
        tailCount: 0,
    }

    flip() {
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
                <Coin number={this.state.number} count={this.state.count} head={this.state.headCount} tail={this.state.tailCount}/>
                {/* {this.state.number === 1 ? <p>HEAD</p> : <p>TAIL</p> }
                <p>You flipped {this.state.count}! Head {this.state.headCount} and Tail {this.state.tailCount}</p> */}
                <button onClick={this.handleClick}>Flip!</button>
            </Container>
        )
    }
}

export default CoinFlipper
