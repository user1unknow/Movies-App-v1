import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { getMoviesByGenre } from '../../../helpers/getMoviesByGenre'
import { usePage } from '../../../hooks/usePage'
import { useLocation } from 'react-router-dom'
import { Card } from '../../ui/card/Card'
import { PaginationButtons } from '../../ui/buttons/PaginationButtons'
import { useHistory } from "react-router-dom";
import { SkeletonLoading } from '../../ui/skeleton/SkeletonLoading'


export const MoviesGenreScreen = ({ id, name }) => {
    const history = useHistory();
    const location = useLocation()
    const { page = 1 } = queryString.parse(location.search)
    const [currentPage, functionPrevPage, functionNextPage] = usePage(parseInt(page), history)
    const [movies, setMovies] = useState({ moviesCollection: [], total_pages: 0, loading: true })

    const { moviesCollection, total_pages, loading } = movies

    useEffect(() => {
        setMovies({ moviesCollection: [], total_pages: 0, loading: true })
        setTimeout(() => {
            getMoviesByGenre(id, currentPage).then(({ moviesCollection, total_pages }) => setMovies({ moviesCollection, total_pages, loading: false }))
        }, 1500);
    }, [id, currentPage])


    return (
        <div className="bg-light border border-2 border-dark rounded m-4">
            {
                loading === true
                    ?
                    <SkeletonLoading />
                    :
                    <>
                        <h1 className="text-center mt-3 fw-bolder fs-1">{name.toUpperCase()}</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                            {
                                moviesCollection.map(({ id, overview, poster_path, release_date, title, vote_average }) => (
                                    <Card key={id} overview={overview} poster_path={poster_path} release_date={release_date} title={title} vote_average={vote_average} />
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
