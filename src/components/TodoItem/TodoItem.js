import React from 'react'
import PropTypes from 'prop-types';
import './TodoItem.css';
import classnames from 'classnames';

const TodoItem = ({todo,clickRemoveAction}) => {
  const onClickRemoveAction = () => clickRemoveAction(todo.id);
  return (
    <div className={classnames("list-item", {
      '--completed': todo.isCompleted,
    })}>
        <div className="list-item__text">{todo.text}</div>
        <button className="list-item__btn" onClick={onClickRemoveAction}>X</button>
    </div>
  )
}

TodoItem.prototypes = {
  clickRemoveAction:PropTypes.func,
  todo:PropTypes.object,
}

export default TodoItem;


