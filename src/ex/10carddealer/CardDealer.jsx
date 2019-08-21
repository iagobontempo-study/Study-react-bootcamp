import React, { Component } from 'react'
import axios from 'axios'
import { Container } from './styles'
import Card from './Card'


export class CardDealer extends Component {
    state = {
        cards: [],
    }
    // const API_DRAW = `https://deckofcardsapi.com/api/deck/${deckID}/draw/`

    componentDidMount = () => {
        const API = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
        axios.get(API).then(response => {
            this.setState({ ...response.data })
        })
    }

    addCard = async () => {
        const API = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`

        try {
            let cardRes = await axios.get(API);
            if (!cardRes.data.success) {
                throw new Error('No cards remaining')
            }
            let card = cardRes.data.cards[0]
            this.setState(st => ({
                remaining: st.remaining - 1,
                cards: [
                    ...st.cards,
                    { id: card.code, image: card.image, name: `${card.suit}-${card.value}` }
                ]
            }))
        } catch (err) {
            alert(err)
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.addCard()
    }

    render() {
        return (
            <Container>
                <h1>Card Dealer</h1>
                <button onClick={this.handleClick}>Shuffle Cards</button>
                {this.state.remaining}
                <div>
                    {this.state.cards.map(c => (
                        <Card key={c.code} image={c.image} code={c.code} />
                    ))}
                </div>
            </Container>
        )
    }
}

export default CardDealer
