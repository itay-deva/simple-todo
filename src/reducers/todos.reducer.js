// const mockTodos = [
//   {
//     id: 1,
//     text: '1-mock-todo',
//     completed: false
//   },
//   {
//     id: 2,
//     text: '2-mock-todo',
//     completed: false
//   }
// ]
const todos = (state = [] , action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case 'REMOVE_TODO':
      return state.filter(todo => (todo.id !== action.payload.id))
    default:
      return state
  }
}

export default todos