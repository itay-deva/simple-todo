import { takeLatest, put, select } from 'redux-saga/effects';
import {  ADD_TODO , GET_TODOS, REMOVE_TODO} from './../constants/todos.constants';
import request from 'superagent';
import { addTodoAction, getTodosAction ,getTodosSuccessAction, removeTodoAction } from './../actions/todos.actions';

const baseUrl = '/todos-api/';

export function* getTodos(){
  console.log('dd')
  try {
    const result = yield request.get(baseUrl)
    yield put(getTodosSuccessAction(result));
  } catch (error) {
    console.log('error: ',error);
    
  }
}

export function* todosSaga(){
  yield takeLatest(GET_TODOS, getTodos)
}