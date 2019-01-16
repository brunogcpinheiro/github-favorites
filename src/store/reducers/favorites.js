import { ADD_FAVORITE } from '../actions/favorites';

const INTIAL_STATE = [];

export default function favorites (state = INTIAL_STATE, action) {
    switch(action.type) {
        case ADD_FAVORITE:
            return [
                ...state,
                {
                    id: Math.random(),
                    name: 'facebook/react',
                    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
                    url: 'https://github.com/facebook/react'
                }
            ];
        default:
            return state;
    }
}