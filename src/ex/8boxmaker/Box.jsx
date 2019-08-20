import React, { Component } from 'react'

export class Box extends Component {
    render() {
        return (
            <div style={{
                id: this.props.id,   
                height: `${this.props.height}px`, 
                width: `${this.props.width}px`, 
                backgroundColor: `#${this.props.background}`}} > 
                <button onClick={this.props.removeBox}>Remove</button>
            </div>
        )
    }
}

export default Box
