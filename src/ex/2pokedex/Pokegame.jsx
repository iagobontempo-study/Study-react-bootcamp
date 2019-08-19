import React, { Component } from 'react'
import Pokedex from './Pokedex'

export class Pokegame extends Component {
    static defaultProps = {
        pokemons : [
            {id: 4, name: "Charmander", type: "Fire", exp: 62},
            {id: 7, name: "Squirtle", type: "Water", exp: 63},
            {id: 11, name: "Metapod", type: "Bug", exp: 72},
            {id: 12, name: "Butterfree", type: "Flying", exp: 178},
            {id: 25, name: "Pikachu", type: "Eletric", exp: 112},
            {id: 39, name: "Jiglypuff", type: "Normal", exp: 95},
            {id: 94, name: "Gengar", type: "Ghost", exp: 225},
            {id: 133, name: "Eevee", type: "Normal", exp: 65},
        ]}

    
    render() {
        let hand1 = []
        let hand2 = [...this.props.pokemons ]

        while (hand1.length < hand2.length) {
            let randomIndex = Math.floor(Math.random() * hand2.length)
            let randomPokemon = hand2.splice(randomIndex, 1)[0]
            hand1.push(randomPokemon)
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0)
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0)

        return (
            <div>
                <h1>Pokedex hand1</h1>
                <Pokedex pokemons={hand1} sumExp={exp1} isWinner={exp1 > exp2}/>
                <h1>Pokedex hand2</h1>
                <Pokedex pokemons={hand2} sumExp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame
