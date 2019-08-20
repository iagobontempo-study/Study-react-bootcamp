import React, { Component } from 'react'

export class Todo extends Component {
    state = {
        isEditing: false,
        todo: this.props.description
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.todo)
        this.setState({ isEditing: false })
    }

    toggleEdit = (e) => {
        this.setState({ isEditing: true })
    }

    toggleCancel = (e) => {
        this.setState({ isEditing: false })
    }

    render() {
        return (
            <div id={this.props.id}>
                {this.state.isEditing ?
                    <form>
                        <input id="todo" value={this.state.todo} onChange={this.handleChange} type="text" />
                        <button onClick={this.handleUpdate}>Save</button>
                        <button onClick={this.toggleCancel}>Cancel</button>
                    </form>
                    :
                    <div>
                        {this.props.description}
                        <button onClick={this.toggleEdit}>Edit</button>
                        <button onClick={this.props.removeTodo}>Delete</button>
                    </div>
                }
            </div>
        )
    }
}

export default Todo
