import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { addTodoAction, removeTodoAction } from './todos.actions'
import TodoList from './views/TodoList'

const totodsSelector = createSelector((state) => state.todos )
const mapStateToProps = state => ({todos: totodsSelector(state)})

const mapDispatchToProps = dispatch => ({
  addTodoAction: (todoText) => dispatch(addTodoAction(todoText)),
  removeTodoAction: (todoId) => dispatch(removeTodoAction(todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
