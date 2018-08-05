import { ADD_TODO, REMOVE_TODO } from '../constants/todos.constants';

let nextTodoId = 0

export const addTodoAction = text => ({
  type: ADD_TODO,
  payload:{
    id: nextTodoId++,
    text
  }
})

export const removeTodoAction = (id) => ({
  type: REMOVE_TODO,
  payload:{
    id
  }
})