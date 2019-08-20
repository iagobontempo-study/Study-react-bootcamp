import React, { Component } from 'react'

export class BoxForm extends Component {
    state = {
        height: '',
        width: '',
        background: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBox(this.state)
        this.setState({ id: '', height: '', width: '', background: ''})
    }

    render() {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" onChange={this.handleChange} value={this.state.id}/>
                    <label htmlFor="height">Height</label>
                    <input type="text" id="height" onChange={this.handleChange} value={this.state.height}/>
                    <label htmlFor="width">Width</label>
                    <input type="text" id="width" onChange={this.handleChange} value={this.state.width}/>
                    <label htmlFor="background">Background</label>
                    <input type="text" id="background" onChange={this.handleChange} value={this.state.background}/>
                    <button>Add Box!</button>
                </form>
            </div>
        )
    }
}

export default BoxForm
