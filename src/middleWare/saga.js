import { takeLatest, put } from 'redux-saga/effects';
import {  GET_TODOS} from './../constants/todos.constants';
import request from 'superagent';
import { getTodosSuccessAction } from './../actions/todos.actions';

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
