import { types } from "../types/types";

const initialState = {
    theme: "",
    inputEmailLogin: null,
    inputPasswordLogin: null,
    msgError: null,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        // LOGIN
        case types.uiSetErrorInputEmailLogin:
            return {
                ...state, inputEmailLogin: action.payload
            }
        case types.uiSetErrorInputPasswordLogin:
            return {
                ...state, inputPasswordLogin: action.payload
            }
        case types.uiRemoveErrorInputEmailLogin:
            return {
                ...state, inputEmailLogin: null
            }
        case types.uiRemoveErrorInputPasswordLogin:
            return {
                ...state, inputPasswordLogin: null
            }

        // REGISTER

        case types.uiSetErrorRegister:
            return {
                ...state, msgError: action.payload
            }
        case types.uiRemoveErrorRegister:
            return {
                ...state, msgError: null
            }

        default:
            return state
    }
}