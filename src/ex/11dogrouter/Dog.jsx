import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { DogContainer } from './styles'

export class Dog extends Component {
    render() {
        return (
            <DogContainer>
                <h1>{this.props.name}</h1>
                <h3>{this.props.age}</h3>
                <img image={this.props.img} alt={`${this.props.name}-${this.props.age}`} />
                {this.props.facts.map(f => (<h4>{f}</h4>))}
                <Link to={`${this.props.name}`}>
                    <button>SEE DETAILS</button>
                </Link>
            </DogContainer>
        )
    }
}

export default Dog
