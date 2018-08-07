import { 
   ADD_TODO,
   GET_TODOS ,
   GET_TODOS_SUCCESS,
   REMOVE_TODO
   } from '../constants/todos.constants';
import { v4 } from 'node-uuid';

export const addTodoAction = text => ({
  type: ADD_TODO,
  payload:{
    id: v4(),
    text
  }
})

export const getTodosAction = () => {
  return ({
  type: GET_TODOS,
})}

export const getTodosSuccessAction = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload
})

export const removeTodoAction = (id) => ({
  type: REMOVE_TODO,
  payload:{
    id
  }
})