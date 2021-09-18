import { ADD_TODO, DELETE_TODO } from './actionTypes';

export const addTodoAction = (todo) => {
    return { type: ADD_TODO, payload: todo };
}

export const deleteTodoAction = (todoIndex) => {
    return { type: DELETE_TODO, payload: todoIndex };
}
