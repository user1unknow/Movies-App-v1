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

        case types.deleteUserCalification:
            return {
                ...state,
                userCalifications: state.userCalifications.filter(calification => calification.id_calification !== action.payload)
            }

        case types.updateUserCalification:
            return {
                ...state,
                userCalifications: state.userCalifications.map(calification => calification.id_calification === action.payload.id_calification
                    ? action.payload.movieUpCalification
                    : calification
                )
            }
        default:
            return state
    }
}