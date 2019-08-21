import React, { Component } from 'react'
import axios from 'axios';

export class ComponentDidMount extends Component {
    state = {
        quote: ''
    }

    componentDidMount = () => {
        axios.get("https://api.github.com/users/iagobontempo/").then(response => {
            this.setState({ quote: response.data })
        })
    }

    render() {
        return (
            <div>
                <h1>Zen</h1>
                <h3>{this.state.quote}</h3>
            </div>
        )
    }
}

export default ComponentDidMount
