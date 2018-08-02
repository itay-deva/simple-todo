import { connect } from 'react-redux'
import { addTodo,removeTodo } from '../actions/todoList.actions'
import TodoList from '../components/TodoList.component'

const mapStateToProps = state => ({todos: state.todos})

const mapDispatchToProps = dispatch => ({
  addTodo: (todoText) => dispatch(addTodo(todoText)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
