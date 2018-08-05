import React from 'react'
import AddTodo from '../AddTodo';
import TodoItem from '../TodoItem'

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

export default TodoList
