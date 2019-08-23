import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { NavContainer } from './styles'

export class Navbar extends Component {
    render() {
        return (
            <NavContainer>
                <h1>Navbar</h1>
                {this.props.dogs.map(d => (
                    <NavLink to={`${d.name}`}>{d.name}</NavLink>
                ))}
            </NavContainer>
        )
    }
}

export default Navbar
