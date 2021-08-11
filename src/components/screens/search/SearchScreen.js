import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import queryString from 'query-string'
import { searchMovie } from '../../../helpers/searchMovie'
import { Card } from '../../ui/card/Card'
import { SkeletonLoading } from '../../ui/skeleton/SkeletonLoading'
import { usePage } from '../../../hooks/usePage'
import { PaginationButtons } from '../../ui/buttons/PaginationButtons'

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = "" } = queryString.parse(location.search)
    const [movies, setMovies] = useState({ moviesCollection: [], total_pages: 0, loading: true })
    const [{ searchInput }, handleInputChange, reset] = useForm({ searchInput: "" })
    const { moviesCollection, total_pages, loading } = movies
    const [currentPage, functionPrevPage, functionNextPage] = usePage(1)

    useEffect(() => {
        setMovies({ moviesCollection: [], total_pages: 0, loading: true })
        setTimeout(() => {
            searchMovie(q, currentPage).then(({ moviesCollection, total_pages }) => setMovies({ moviesCollection, total_pages, loading: false }))
        }, 1500);
    }, [q, currentPage])

    const functionSearchMovie = (event) => {
        event.preventDefault()
        history.push(`?q=${searchInput}`)
        reset()
    }


    return (
        <div className="bg-light border border-2 border-dark rounded m-4">
            <h1 className="text-center mt-3 fw-bolder fs-1">SEARCH</h1>
            <form onSubmit={functionSearchMovie} autoComplete="off" className="input-group mb-3">
                <input type="text"
                    className="form-control m-5 me-0 text-center fw-bolder"
                    placeholder="Search Movie!"
                    name="searchInput"
                    onChange={handleInputChange}
                    value={searchInput}
                />
                <div className="input-group-append">
                    <button onClick={functionSearchMovie} className="btn btn-outline-primary m-5 ms-2 " type="button">
                        <i className="fas fa-search"></i> Search
                    </button>
                </div>
            </form>

            {
                (moviesCollection.length > 0 && loading === false) &&
                <div className="bg-light border border-2  rounded m-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                        {
                            moviesCollection.map((movieInfo) => (
                                <Card key={movieInfo.id} {...movieInfo} />
                            ))
                        }
                    </div>
                </div>
            }

            {
                q === "" &&
                <h3 className=" m-5 text-center text-primary fw-bolder " >
                    Search your movie <i className="fas fa-search"></i>
                </h3>
            }

            {
                (loading === true && q.length > 0) &&
                <SkeletonLoading />
            }
            {
                (q !== "" && moviesCollection.length === 0 && loading === false) &&
                <h3 className=" m-5 text-center text-danger fw-bolder " >
                    Sorry, we couldn't find your movie, try another one! <i className="fas fa-times"></i>
                </h3>
            }
            {
                (total_pages > 0 && loading === false && q !== "") &&
                <PaginationButtons functionPrevPage={functionPrevPage} functionNextPage={functionNextPage} currentPage={currentPage} total_pages={total_pages} />

            }

        </div>
    )
}
