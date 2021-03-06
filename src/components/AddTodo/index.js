import React from 'react'
import PropTypes from 'prop-types';
class AddTodo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoText:'',
    }
  }

  setTodoText = ({ currentTarget }) => this.setState({todoText:currentTarget.value})
  onClickAddTodoAction = () => this.props.addTodoAction(this.state.todoText);
  
  render(){
    return (
      <div>
        <input 
            type="text" 
            onChange={this.setTodoText}
        />
        <button 
          onClick={this.onClickAddTodoAction}
          disabled={this.state.todoText.length === 0}
          >
            Add Todo
        </button>
      </div>
    )
  }
}

AddTodo.proptypes = {
  todoText:PropTypes.string,
  addTodoAction:PropTypes.func,
}

export default AddTodo
