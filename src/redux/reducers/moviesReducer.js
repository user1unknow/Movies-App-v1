// const moviesCalificated = {
//     id,
//     title,
//     overview,
//     vote_average,
//     user_calification: calification,
//     poster_path,
//     release_date,
// }

import { types } from "../types/types";

const initialState = {
    user_opnions: [],
    userCalifications: [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadUserCalifications:
            return {
                ...state,
                userCalifications: [...action.payload]
                // userCalifications: action.payload
            }

        default:
            return state
    }
}