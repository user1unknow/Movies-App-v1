import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

export const Error404 = () => {
    const { location: { pathname } } = useHistory()

    if (pathname === "/Movie-App/" || pathname === "/Movie-App") {
        return <Redirect to="/" />
    }
    return (
        <div className="bg-light text-dark no-border me-3 ms-3">

            <div className="row p-3">
                <div className="col text-center ">
                    <h1 className="fw-bold">404 Not found</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center" >
                    <img className="img-fluid " src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Error 404" />
                </div>
            </div>
            <div className="row no-border">
                <div className="col text-center m-5">
                    <h1 className="fw-bolder">Look like you're lost</h1>
                    <p className="fw-bolder">the page you are looking for not avaible!</p>
                    <Link type="button" className="btn btn-success fw-bold" to="/" >Go to home</Link>
                </div>
            </div>
        </div>
    )
}
