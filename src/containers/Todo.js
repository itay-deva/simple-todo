import { connect } from 'react-redux';
import { addTodoAction, removeTodoAction } from '../actions/todos.actions';
import TodoList from '../components/views/TodoList';
import totodsSelector from '../selectors/totos.selectors';

const mapStateToProps = state => ({todos: totodsSelector(state)});

const mapDispatchToProps = dispatch => ({
  addTodoAction: (todoText) => dispatch(addTodoAction(todoText)),
  removeTodoAction: (todoId) => dispatch(removeTodoAction(todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
