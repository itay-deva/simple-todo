import React from 'react'
import { connect } from 'react-redux';
import { addTodoAction, removeTodoAction } from '../actions/todos.actions';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import totodsSelector from '../selectors/totos.selectors';

const mapStateToProps = state => ({todos: totodsSelector(state)});

const mapDispatchToProps = dispatch => ({
  addTodoAction: (todoText) => dispatch(addTodoAction(todoText)),
  removeTodoAction: (todoId) => dispatch(removeTodoAction(todoId))
})


const TodoList = (props) => {

  // the reasonfor input is to change it with out making setstate, which will cause a render
    return (
      <div>
        <AddTodo addTodoAction={props.addTodoAction}/>
        <ul>
          {props.todos.map((todo) =>
            <TodoItem todo={{...todo}} clickRemoveAction={props.removeTodoAction}/>
          )}
        </ul>
      </div>
    )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
