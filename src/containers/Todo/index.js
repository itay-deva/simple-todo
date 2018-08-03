import { connect } from 'react-redux'
import { addTodoAction, removeTodoAction } from './todos.actions'
import TodoList from './views/TodoList'

const mapStateToProps = state => ({todos: state.todos})

const mapDispatchToProps = dispatch => ({
  addTodoAction: (todoText) => dispatch(addTodoAction(todoText)),
  removeTodoAction: (todoId) => dispatch(removeTodoAction(todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
