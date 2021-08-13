import { useState } from 'react'

export const usePageSearch = (initialState) => {

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


    return [currentPage, functionPrevPage, functionNextPage]
}