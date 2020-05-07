import  { ADD_ID, REMOVE_ID } from '../actions/types';

const initialState = {
    data: [],
};

const FoodDataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_ID:
            return {
                ...state,
                loading: false,
                data: [...state.data, payload],
            };
        case REMOVE_ID:
            return {
                ...state,
                data: state.data.filter(id => id !== payload)
            }
        default: return state;
    }
};

export default FoodDataReducer;