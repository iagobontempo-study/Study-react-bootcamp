import React, { Component } from 'react'

export class DogDetails extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.dog.name}</h1>
                <h2>{this.props.dog.age} years</h2>
                <img src={this.props.dog.src} alt="" />
                {this.props.dog.facts.map(f => (<h3>{f}</h3>))}
            </div>
        )
    }
}

export default DogDetails
