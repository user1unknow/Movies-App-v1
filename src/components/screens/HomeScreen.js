import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMovies } from '../../helpers/getMovies'
import { usePage } from '../../hooks/usePage'
import { Card } from '../ui/card/Card.jsx'
import { CarouselComponent } from '../ui/carousel/CarouselComponent'
const ContainerHomeScreen = styled.div`
    height: auto
`

export const HomeScreen = () => {
    const [page, prevPage, nextPage] = usePage(1)
    const [movies, setMovies] = useState([], 1)
    useEffect(() => {
        getMovies(page).then(setMovies)
    }, [page])

    const { moviesCollection = [], total_pages } = movies
    const moviesReduced = moviesCollection.slice(9, 20)
    return (
        <ContainerHomeScreen className="bg-light border border-2 border-dark rounded m-4">


            {
                page === 1 ?
                    <>
                        <h1 className="text-center mt-3">HOME SCREEN</h1>
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
            <div style={{ width: "100%" }} className="d-grid gap-2 d-flex justify-content-between">

                <button onClick={prevPage} className={`btn btn-primary btn-lg ${page === 1 && 'disabled'}`}>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button onClick={nextPage} className={`btn btn-primary btn-lg ${page === total_pages && 'disabled'}`}>
                    <i className="fas fa-arrow-right"></i>
                </button>

            </div>

        </ContainerHomeScreen>
    )
}
