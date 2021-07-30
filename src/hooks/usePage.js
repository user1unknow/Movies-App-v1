import { useState } from 'react'

export const usePage = (initialState = 1) => {

    const [page, setPage] = useState(initialState)

    const prevPage = () => {
        setPage((value) => value - 1)
    }

    const nextPage = () => {
        setPage((value) => value + 1)
    }

    return [page, prevPage, nextPage]
}