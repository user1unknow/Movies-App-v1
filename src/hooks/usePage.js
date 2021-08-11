// import queryString from 'query-string'
import { useState } from 'react'

export const usePage = (initialState, history) => {

    const [currentPage, setPage] = useState(initialState)

    const prevPage = (value) => {
        setPage(currentPage - value)
    }

    const nextPage = (value) => {
        setPage(currentPage + value)
    }
    // NORMAL

    const functionNextPage = () => {
        nextPage(1)
        window.scrollTo(0, 350);
    }

    const functionPrevPage = () => {
        prevPage(1)
        window.scrollTo(0, 350);
    }



    // QUERY PARAMS
    const functionNextPageQuery = () => {
        nextPage(1)
        history.push(`?page=${currentPage + 1}`)
        window.scrollTo(0, 0);
    }

    const functionPrevPageQuery = () => {
        prevPage(1)
        history.push(`?page=${currentPage - 1}`)
        window.scrollTo(0, 0);
    }

    return [currentPage, functionPrevPage, functionNextPage, functionPrevPageQuery, functionNextPageQuery]
}