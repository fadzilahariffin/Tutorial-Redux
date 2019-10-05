import { ADD_TODO } from '../actions/actionType'

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: { todo }
})

