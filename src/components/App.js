import React, { Component } from 'react';
import TodoList from '../containers/TodoList.container';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: props.todos
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Payoneer Todo List</h1>
        </header>
        <br/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
