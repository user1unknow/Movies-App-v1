import { db } from "../firebase/firebase-config"

export const loadCalifications = async (uid) => {
    const calificationsUser = await db.collection(`${uid}/movies/user_califications`).get()
    const califications = []

    calificationsUser.forEach(calification => {
        califications.push({
            id_calification: calification.id,
            ...calification.data()
        })
    })
    return califications

}
