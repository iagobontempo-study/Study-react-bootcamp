import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom'
import Dog from './Dog';

import { ListContainer } from './styles'

export class DogList extends Component {
    render() {
        return (
            <ListContainer>
                {this.props.dogs.map(d => (
                    <Dog name={d.name} age={d.age} image={d.src} facts={d.facts.map(f => (f))} />
                ))}
            </ListContainer>
        )
    }
}

export default DogList
