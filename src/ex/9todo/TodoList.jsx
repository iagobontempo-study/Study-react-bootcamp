import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

export class TodoList extends Component {
    state = {
        todoList: [
        ]
    }

    addTodo = (newTodo) => {
        this.setState({
            todoList: [...this.state.todoList, newTodo]
        })
    }

    removeTodo = (id) => {
        this.setState({
            todoList: this.state.todoList.filter(todo => todo.id !== id)
        })
    }

    updateTodo = (id, updatedTodo) => {
        const updatedTodos = this.state.todoList.map(todo => {
            if (todo.id === id){
                return {...todo, task: updatedTodo}
            }
            return todo
        })
        this.setState({ todoList: updatedTodos})
    }

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todoList.map(todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed }
            }
            return todo
        })
        this.setState({ todoList: updatedTodos})
    }

    renderTodos = () => {
        return (
            <ul>
                {this.state.todoList.map(todo => (
                    <Todo key={todo.id} id={todo.id} 
                    task={todo.task} 
                    removeTodo={() => this.removeTodo(todo.id)}
                    updateTodo={this.updateTodo} 
                    completed={todo.completed}
                    toggleTodo={this.toggleCompletion} />
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
