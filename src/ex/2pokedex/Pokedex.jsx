import React, { Component } from 'react'
import { Container } from './PokecardStyles.js'

import Pokecard from './Pokecard'

export class Pokedex extends Component {
    render() {
        return (
            <Container>
                <h5>Total exp: {this.props.sumExp}</h5>
                {this.props.isWinner ? <p style={{backgroundColor: '#00ff00'}}>WINNER</p> : <p style={{backgroundColor: '#ff0000'}}>LOSER</p>}
                {this.props.pokemons.map(pokemon =>(
                    <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.exp}/>
                ))}
            </Container>
        )
    }
}

export default Pokedex
