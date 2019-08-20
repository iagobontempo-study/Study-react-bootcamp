import React, { Component } from 'react'
import uuid from 'uuid/v4'

export class NewTodoForm extends Component {
    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo({ ...this.state, id: uuid(), completed: false })
        this.setState({ task: '' })
    }

    render() {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="task" type="text"
                        placeholder="Todo"
                        onChange={this.handleChange}
                        value={this.state.task} 
                        required/>
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm
