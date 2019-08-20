import React, { Component } from 'react'

export class Todo extends Component {
    state = {
        isEditing: false,
        task: this.props.task
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }

    toggleEdit = (e) => {
        this.setState({ isEditing: true })
    }

    toggleCancel = (e) => {
        this.setState({ isEditing: false })
    }

    handleToggle = (e) => {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        return (
            <div id={this.props.id}>
                {this.state.isEditing ?
                    <form>
                        <input id="task" value={this.state.task} onChange={this.handleChange} type="text" />
                        <button onClick={this.handleUpdate}>Save</button>
                        <button onClick={this.toggleCancel}>Cancel</button>
                    </form>
                    :
                    <div onClick={this.handleToggle} style={{color: this.props.completed && 'lightgray'}}>
                        {this.props.task}
                        <button onClick={this.toggleEdit}>Edit</button>
                        <button onClick={this.props.removeTodo}>Delete</button>
                    </div>
                }
            </div>
        )
    }
}

export default Todo
