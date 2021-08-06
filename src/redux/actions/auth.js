import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import { types } from '../types/types'

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName))
        }
        )
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => {
    return {
        type: types.logout,
    }
}

export const error = (infoErr) => {
    return{
        type: types.setError,
        payload: infoErr
    }
}