import React, { Component } from 'react'
import axios from 'axios';
import './loader.css'

export class ComponentDidMount extends Component {
    state = {
        quote: '',
        user: '',
        id: '',
    }

    componentDidMount = () => {
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(() => {
                this.setState({ quote: response.data })
            }, 3000);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClick = e => {
        axios.get(`https://api.github.com/users/${this.state.user}`).then(response => {
            this.setState({ id: response.data.id })
        })
    }

    render() {
        return (
            <div>
                <h1>Zen</h1>

                {this.state.quote === '' ?
                    <div className='loader'>

                    </div>
                    :
                    <h3>{this.state.quote}</h3>}

                <div>
                    <input id="user" type="text" placeholder="Github user" value={this.state.user} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Search ID</button>
                </div>
                <h3>ID = {this.state.id} </h3>
            </div>
        )
    }
}

export default ComponentDidMount
