export const ADD_FAVORITE_REQUEST = 'ADD_FAVORITE_REQUEST';
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_FAILURE = 'ADD_FAVORITE_FAILURE';

export const addFavoriteRequest = repository => ({
    type: ADD_FAVORITE_REQUEST,
    payload: { repository },
});

export const addFavoriteSuccess = data => ({
    type: ADD_FAVORITE_SUCCESS,
    payload: { data }
});

export const addFavoriteFailure = error => ({
    type: ADD_FAVORITE_FAILURE,
    payload: { error }
});