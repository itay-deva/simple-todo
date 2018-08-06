import { ADD_TODO, REMOVE_TODO } from '../constants/todos.constants';
import { v4 } from 'node-uuid';

export const addTodoAction = text => ({
  type: ADD_TODO,
  payload:{
    id: v4(),
    text
  }
})

export const removeTodoAction = (id) => ({
  type: REMOVE_TODO,
  payload:{
    id
  }
})