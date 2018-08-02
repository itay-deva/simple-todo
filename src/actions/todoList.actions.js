let nextTodoId = 0

export const getTodos = () => ({
  type:'GET_TODOS'
})

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload:{
    id: nextTodoId++,
    text
  }
})

export const removeTodo = (id) => ({
  type:'REMOVE_TODO',
  payload:{
    id
  }
})