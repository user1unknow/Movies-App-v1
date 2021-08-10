import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import { types } from '../types/types'
import Swal from 'sweetalert2'


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user: { uid, displayName } }) => {
                dispatch(login(uid, displayName))
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error!',
                    text: err,
                    icon: 'error',
                    confirmButtonText: 'Acept'
                })
            })
    }
}

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


export const registerUser = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, user.displayName))
            }
            ).catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Error a ocurred, Try Again!"
                })
            })
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
