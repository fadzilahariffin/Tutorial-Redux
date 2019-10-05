import { ADD_TODO, GET_TODOS } from '../actions/actionType'

const INITIAL_STATE = {
  todos: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
// var todoArr = [...state.todos]
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload.todo],

      }
    default:
      return state
  }
}

export default todoReducer