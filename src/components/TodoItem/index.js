import React from 'react'

const TodoItem = ({todo,clickRemoveAction}) => {
  const onClickRemoveAction = () => clickRemoveAction(todo.id);
  return (
    <li
        key={todo.id}
    >
      <div className="list-item">
        <div>{todo.text}</div>
        <button onClick={onClickRemoveAction}>X</button>
      </div>
    </li>
  )
}

export default TodoItem;


