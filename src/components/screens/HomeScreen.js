import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { usePage } from '../../hooks/usePage'
import { getMovies } from '../../helpers/getMovies'
import { SkeletonLoading } from '../ui/skeleton/SkeletonLoading'
import { Card } from '../ui/card/Card'
import { CarouselComponent } from '../ui/carousel/CarouselComponent'
import { PaginationButtons } from '../ui/buttons/PaginationButtons'


export const HomeScreen = ({ history }) => {

    const location = useLocation()
    const { page = 1 } = queryString.parse(location.search)
    const [currentPage, functionPrevPage, functionNextPage] = usePage(parseInt(page), history)
    const [movies, setMovies] = useState({ moviesCollection: [], total_pages: 0, loading: true })
    
    useEffect(() => {
        setMovies({ moviesCollection: [], total_pages: 0, loading: true })
        setTimeout(() => {
            getMovies(currentPage).then(({ moviesCollection, total_pages }) => setMovies({ moviesCollection, total_pages, loading: false }))
        }, 2000);

    }, [currentPage])

    const { moviesCollection, total_pages, loading } = movies
    const moviesReduced = moviesCollection.slice(9, 20)

    return (
        <div className="border border-2 border-dark rounded m-4">
            {
                currentPage === 1 && loading === false ?
                    <>
                        {
                            <CarouselComponent />
                        }
                        <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                            {
                                moviesReduced.map((movieInfo) => (
                                    <Card key={movieInfo.id} {...movieInfo} />
                                ))
                            }

                        </div>
                    </>
                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                        {
                            moviesCollection.map((movieInfo) => (
                                <Card key={movieInfo.id} {...movieInfo} />
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
                loading === true && <SkeletonLoading />
            }

        </div>
    )
}
