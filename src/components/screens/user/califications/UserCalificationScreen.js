import React from 'react'
import { useSelector } from 'react-redux'
import { CardMovieCalificated } from './CardMovieCalificated'

export const UserCalificationScreen = () => {
    const { userCalifications } = useSelector(state => state.movies)
    console.log(userCalifications)
    const registros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="bg-light border border-2 m-4 ">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 pb-4 justify-content-center bg-dark" style={{height:"auto"}}>
                {
                    userCalifications.map((calification) => (
                        <CardMovieCalificated key={calification.id} {...calification} />
                    ))
                }
            </div>
        </div>
    )
}
