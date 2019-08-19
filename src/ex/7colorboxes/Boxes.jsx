import React, { Component } from 'react'

export class Boxes extends Component {
    state = {
        color: "#" + Math.random().toString(16).slice(2, 8)
    }

    randomColor() {
        let generatedColor;

        do {
            generatedColor = "#" + Math.random().toString(16).slice(2, 8)
        } while (generatedColor === this.state.color)
        
        this.setState({ color: generatedColor})
    }

    handleClick = (e) => {
        this.randomColor()
    }

    render() {
        return (
            <div style={{backgroundColor: `${this.state.color}`}} onClick={this.handleClick} />
        )
    }
}

export default Boxes
