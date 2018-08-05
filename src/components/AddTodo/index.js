import React from 'react'

class AddTodo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todoText:''
    }
  }
  
  render(){
    return (
      <div>
        <input 
            type="text" 
            onChange={(e) => { this.setState({todoText:e.currentTarget.value})}}
        />
        <button 
          onClick={() => this.props.addTodoAction(this.state.todoText)}
          disabled={this.state.todoText.length === 0}
          >
            Add Todo
        </button>
      </div>
    )
  }
}

export default AddTodo
