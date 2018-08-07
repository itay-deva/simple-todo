import { ADD_TODO,GET_TODOS_SUCCESS, REMOVE_TODO} from '../constants/todos.constants'

const todos = (state = [] , action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case GET_TODOS_SUCCESS:
      return [
        ...state,
        ...action.payload
      ]
    case REMOVE_TODO:
      return state.filter(todo => (todo.id !== action.payload.id))
    default:
      return state
  }
}

export default todos