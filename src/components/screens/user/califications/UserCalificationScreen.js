import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingUserCalifications } from '../../../../redux/actions/movies'
import { CardMovieCalificated } from './CardMovieCalificated'

export const UserCalificationScreen = () => {

    const dispatch = useDispatch()
    const { uid } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(startLoadingUserCalifications(uid))
    }, [dispatch, uid])
    const { userCalifications } = useSelector(state => state.movies)

    return (
        <div className=" border border-2 border-dark m-4 ">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 pb-4 justify-content-center">
                {
                    userCalifications.length > 0 ?
                        userCalifications.map((calification) => (
                            <CardMovieCalificated key={calification.id} {...calification} />
                        ))
                        :
                        <div className="d-flex flex-column justify-content-center mt-5" style={{ width: "800px" }}>
                            <p className="text-center fw-bolder fs-3 text-warning">OOPS! Looks like you haven't rated any movies.</p>
                            <img className="d-block mt-4 mb-2 rounded" src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif" style={{ width: "100%" }} alt="GIF" />
                        </div>
                }
            </div>
        </div>
    )
}
