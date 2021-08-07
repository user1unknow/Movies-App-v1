import { types } from "../types/types"

//AUTH LOGIN


export const errorEmailLogin = (errorEmailLogin) => {
    return {
        type: types.uiSetErrorInputEmailLogin,
        payload: errorEmailLogin,
    }
}

export const errorPasswordLogin = (errorPasswordLogin) => {
    return {
        type: types.uiSetErrorInputPasswordLogin,
        payload: errorPasswordLogin,
    }
}

// REMOVE AUTH LOGIN

export const removeErrorEmailLogin = () => {
    return {
        type: types.uiRemoveErrorInputEmailLogin,
    }
}

export const removeErrorPasswordLogin = () => {
    return {
        type: types.uiRemoveErrorInputPasswordLogin,
    }
}

//AUTH REGISTER

export const setErroRegister = (err) => ({
    type: types.uiSetErrorRegister,
    payload: err
})

export const removeErrorRegister = () => ({
    type: types.uiRemoveErrorRegister
})