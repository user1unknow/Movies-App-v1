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
                userCalifications: action.payload
            }
        case types.newUserCalification:
            return {
                ...state,
                userCalifications: [action.payload, ...state.userCalifications]
            }

        default:
            return state
    }
}