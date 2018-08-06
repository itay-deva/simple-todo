import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
            <TodoItem key={todo.id} todo={{...todo}} clickRemoveAction={props.removeTodoAction}/>
          )}
        </ul>
      </div>
    )
}

TodoItem.prototypes = {
  todos:PropTypes.arrayOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
