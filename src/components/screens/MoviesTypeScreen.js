import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import queryString from 'query-string'
import { usePage } from '../../hooks/usePage'
import { getMoviesByType } from '../../helpers/getMoviesByType'
import { PaginationButtons } from '../ui/buttons/PaginationButtons'
import { Card } from '../ui/card/Card'
import { SkeletonLoading } from '../ui/skeleton/SkeletonLoading'

export const MoviesTypeScreen = ({ history }) => {
    const location = useLocation()
    const { typeMovie } = useParams()
    const { page = 1 } = queryString.parse(location.search)
    const [currentPage, functionPrevPage, functionNextPage] = usePage(parseInt(page), history)
    const [movies, setMovies] = useState({ moviesCollection: [], total_pages: 0, loading: true })

    useEffect(() => {
        setMovies({ moviesCollection: [], total_pages: 0, loading: true })
        setTimeout(() => {
            getMoviesByType(typeMovie, page).then(({ moviesCollection, total_pages }) => setMovies({ moviesCollection, total_pages, loading: false }))
        }, 1500);
    }, [typeMovie, page])

    const { moviesCollection, total_pages, loading } = movies

    return (
        <div className="bg-light border border-2 border-dark rounded ms-4 me-4 mt-4  bg-dark">
            {
                loading === true
                    ?
                    <SkeletonLoading />
                    :
                    <>
                        <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                            {
                                moviesCollection.map((movieInfo) => (
                                    <Card key={movieInfo.id} {...movieInfo} />
                                ))
                            }
                        </div>
                    </>
            }
            {
                loading === false
                &&
                <PaginationButtons functionPrevPage={functionPrevPage} functionNextPage={functionNextPage} currentPage={currentPage} total_pages={total_pages} />
            }

        </div>
    )
}
