import React from 'react'

class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todoText:''
    }
  }
  // the reasonfor input is to change it with out making setstate, which will cause a render
  input = ''
  render(){
    return (
      <div>
        <div>
        <input 
            type="text" 
            onChange={(e) => { this.setState({todoText:e.currentTarget.value})}}
          />
          <button 
            onClick={() => this.props.addTodo(this.state.todoText)}
            disabled={this.state.todoText.length === 0}
            >
              Add Todo
          </button>
        </div>
        <ul>
          {this.props.todos.map(todo =>
            <li
              key={todo.id}
            >
              <div className="list-item">
                <div>{todo.text}</div>
                <button onClick={() => this.props.removeTodo(todo.id)}>X</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoList
