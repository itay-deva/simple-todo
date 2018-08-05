import React from 'react';
import TodoList from '../../containers/Todo.js';
import './App.css';

const App = () => (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Todo List</h1>
      </header>
      <br/>
      <TodoList/>
    </div>
  );


export default App;
