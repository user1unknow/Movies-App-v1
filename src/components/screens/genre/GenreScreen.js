import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { validatorGenreId } from '../../../helpers/validatorGenreId'
import { MoviesGenreScreen } from './MoviesGenreScreen'

export const GenreScreen = () => {
    const { genreName } = useParams()
    const [genreValidator, setGenreValidator] = useState({})

    useEffect(() => {
        validatorGenreId(genreName).then(setGenreValidator)
    }, [genreName])

    if (!genreValidator) {
        return <Redirect to="/" />
    }
    
    return (
        <div>
            <MoviesGenreScreen {...genreValidator} />
        </div>
    )
}
