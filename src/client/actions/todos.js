import { ADD_TODO } from './actionTypes';

export const addTodoAction = (todo) => {
    return { type: ADD_TODO, payload: todo };
}
