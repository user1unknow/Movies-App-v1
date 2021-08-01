import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { usePage } from '../../hooks/usePage'
import { getMovies } from '../../helpers/getMovies'
import { Card } from '../ui/card/Card.jsx'
import { CarouselComponent } from '../ui/carousel/CarouselComponent'
import queryString from 'query-string'
import { SpinnerLoad } from '../ui/spinner/SpinnerLoad'
import { PaginationButtons } from '../ui/buttons/PaginationButtons'



export const HomeScreen = ({ history }) => {

    const location = useLocation()
    const { page = 1 } = queryString.parse(location.search)
    const [currentPage, functionPrevPage, functionNextPage] = usePage(parseInt(page), history)
    const [movies, setMovies] = useState({ moviesCollection: [], total_pages: 0, loading: true })
    useEffect(() => {
        setTimeout(() => {
            getMovies(currentPage).then(({ moviesCollection, total_pages }) => setMovies({ moviesCollection, total_pages, loading: false }))
        }, 1500);
    }, [currentPage])


    const { moviesCollection, total_pages, loading } = movies
    const moviesReduced = moviesCollection.slice(9, 20)

    return (
        <div className="bg-light border border-2 border-dark rounded m-4">
            {
                currentPage === 1 ?
                    <>
                        <h1 className="text-center mt-3 fw-bolder fs-1">HOME SCREEN</h1>
                        {
                            <CarouselComponent />
                        }
                        <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                            {
                                moviesReduced.map(({ id, overview, poster_path, release_date, title, vote_average }) => (
                                    <Card key={id} overview={overview} poster_path={poster_path} release_date={release_date} title={title} vote_average={vote_average} />
                                ))
                            }

                        </div>
                    </>
                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                        {
                            moviesCollection.map(({ id, overview, poster_path, release_date, title, vote_average }) => (
                                <Card key={id} overview={overview} poster_path={poster_path} release_date={release_date} title={title} vote_average={vote_average} />
                            ))
                        }
                    </div>

            }
            {
                loading === false
                &&
                <PaginationButtons functionPrevPage={functionPrevPage} functionNextPage={functionNextPage} currentPage={currentPage} total_pages={total_pages} />
            }

            {
                loading === true && <SpinnerLoad />
            }

        </div>
    )
}
