import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actionTypes';
const initialState = [{ title: 'title', description: 'description', complete: false }];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [ action.payload, ...state ];
        case TOGGLE_TODO:
            return state.map((todo, index) => index === action.payload ? { ...todo, complete: !todo.complete } : todo)
        case DELETE_TODO:
            return state.filter( (todo, index) => index !== action.payload);
        default:
            return state;
    }
}

export default reducer;
