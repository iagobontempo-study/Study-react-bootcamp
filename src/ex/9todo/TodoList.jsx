import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

export class TodoList extends Component {
    state = {
        list: [
            { id: 1, todo: 'Buy some apple' },
            { id: 2, todo: 'Buy NOTHING' },
        ]
    }

    addTodo = (newTodo) => {
        this.setState({
            list: [...this.state.list, newTodo]
        })
    }

    removeTodo = (id) => {
        this.setState({
            list: this.state.list.filter(todo => todo.id !== id)
        })
    }

    updateTodo = (id, updatedTodo) => {
        const updatedTodos = this.state.list.map(todo => {
            if (todo.id === id){
                return {...todo, todo: updatedTodo}
            }
            return todo
        })
        this.setState({ list: updatedTodos})
    }

    renderTodos = () => {
        return (
            <ul>
                {this.state.list.map(todo => (
                    <Todo key={todo.id} id={todo.id} 
                    description={todo.todo} 
                    removeTodo={() => this.removeTodo(todo.id)}
                    updateTodo={this.updateTodo} />
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>List</h1>
                {this.renderTodos()}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList
