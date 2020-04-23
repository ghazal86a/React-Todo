import React from 'react';
import Todos from './todos'
import AddTodo from './addTodo';

class App extends React.Component {
  state = {
    todos : [
      {id: 1, content:'buy milk'},
      {id: 2, content: 'play games'}
    ]
  }

  deleteTodo = (id) => {
    
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    
    this.setState({
      todos : newTodos
    })
  }

  addTodo = (todo) => {

    let addedTodo = [...this.state.todos, todo]
    
    this.setState({
        todos: addedTodo
    })
  }

  render() {
    return (
      <div className="todoApp container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
