import React from 'react'
import AddTodo from './AddTodo';

const TodoList = (props) => {

  // the reasonfor input is to change it with out making setstate, which will cause a render
    return (
      <div>
        <AddTodo addTodoAction={props.addTodoAction}/>
        <ul>
          {props.todos.map(todo =>
            <li
              key={todo.id}
            >
              <div className="list-item">
                <div>{todo.text}</div>
                <button onClick={() => props.removeTodoAction(todo.id)}>X</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
}

export default TodoList
