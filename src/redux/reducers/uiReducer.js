import { types } from "../types/types";

const initialState = {
    theme: "",
    msgError: null,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setError:
            return {
                ...state, msgError: action.payload
            }

        default:
            return state
    }
}