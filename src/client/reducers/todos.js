import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';
const initialState = [{ title: 'title', description: 'description' }];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [ action.payload, ...state ];
        case DELETE_TODO:
            return state.filter( (item, index) => index !== action.payload);
        default:
            return state;
    }
}

export default reducer;
