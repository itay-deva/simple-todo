import React from 'react'
import PropTypes from 'prop-types';


const TodoItem = ({todo,clickRemoveAction}) => {
  const onClickRemoveAction = () => clickRemoveAction(todo.id);
  return (
    <li>
      <div className="list-item">
        <div>{todo.text}</div>
        <button onClick={onClickRemoveAction}>X</button>
      </div>
    </li>
  )
}

TodoItem.prototypes = {
  clickRemoveAction:PropTypes.func,
  todo:PropTypes.object,
}

export default TodoItem;


