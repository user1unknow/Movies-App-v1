import { db } from "../../firebase/firebase-config"
import Swal from 'sweetalert2'
import { types } from "../types/types"
import { loadCalifications } from "../../helpers/loadCalifications"

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const newMovieCalification = (calification, infoMovie) => {
    return async (dispatch, getState) => {
        const { auth: { uid } } = getState()
        const { id, title, overview, vote_average, poster_path, release_date } = infoMovie
        const newMovieCalification = {
            id,
            title,
            overview,
            vote_average,
            user_calification: calification,
            poster_path,
            release_date,
        }
        try {
            const doc = await db.collection(`${uid}/movies/user_califications`).add(newMovieCalification)
            Toast.fire({
                icon: 'success',
                title: 'Your calification has been saved!'
            })
            dispatch(newUserCalification(doc.id, newMovieCalification))
        }
        catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'A error a ocurred, try later!'
            })
        }
    }

}

export const startLoadingUserCalifications = (uid) => {
    return async (dispatch) => {
        const califications = await loadCalifications(uid)
        dispatch(setCalifications(califications))

    }
}

export const startDeleting = (idCalification) => {
    return async (dispatch, getState) => {
        const { auth: { uid } } = getState()
        await db.doc(`${uid}/movies/user_califications/${idCalification}`).delete()
        dispatch(deleteUserCalification(idCalification))

    }
}

export const startUpdate = (id_calification, movieUpCalification) => {
    return async (dispatch, getState) => {
        const { auth: { uid } } = getState()
        const calificationFirestore = { id_calification, ...movieUpCalification }
        await db.doc(`${uid}/movies/user_califications/${id_calification}`).update(calificationFirestore)
        dispatch(updateUserCalification(id_calification, movieUpCalification))
    }

}

export const setCalifications = (califications) => {
    return {
        type: types.loadUserCalifications,
        payload: califications
    }
}

export const newUserCalification = (docId, newMovie) => {
    return {
        type: types.newUserCalification,
        payload: {
            docId,
            ...newMovie
        }
    }
}

export const deleteUserCalification = (id) => {
    return {
        type: types.deleteUserCalification,
        payload: id
    }
}

export const updateUserCalification = (id_calification, movieUpCalification) => {
    return {
        type: types.updateUserCalification,
        payload: {
            id_calification,
            movieUpCalification: {
                id_calification,
                ...movieUpCalification
            }
        }
    }
}