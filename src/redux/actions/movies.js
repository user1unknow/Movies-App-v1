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
            await db.collection(`${uid}/movies/user_califications`).add(newMovieCalification)
            Toast.fire({
                icon: 'success',
                title: 'Your calification has been saved!'
            })
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


export const setCalifications = (califications) => {
    return {
        type: types.loadUserCalifications,
        payload: califications
    }
}