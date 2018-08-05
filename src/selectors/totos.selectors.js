import { createSelector } from 'reselect'

const getTodos = (state) => state.todos;
const totodsSelector = createSelector(getTodos,(todos) =>  todos);

export default totodsSelector;