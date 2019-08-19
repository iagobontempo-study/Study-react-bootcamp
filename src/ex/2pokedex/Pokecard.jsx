import React, { Component } from 'react'

export class Pokecard extends Component {  
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt="" />
                <p>Type: {this.props.type}</p>
                <p>Exp: {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard
