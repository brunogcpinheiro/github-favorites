import { ADD_FAVORITE_REQUEST, ADD_FAVORITE_SUCCESS } from '../actions/favorites';

const INTIAL_STATE = {
    loading: false,
    data: [],
};

export default function favorites (state = INTIAL_STATE, action) {
    switch(action.type) {
        case ADD_FAVORITE_REQUEST:
            return { ...state, loading: true }
            
        case ADD_FAVORITE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data],
            };
        default:
            return state;
    }
}