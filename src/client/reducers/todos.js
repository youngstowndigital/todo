import { ADD_TODO } from '../actions/actionTypes';
const initialState = [{ title: 'title', description: 'description' }];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [ action.payload, ...state ];
        default:
            return state;
    }
}

export default reducer;
