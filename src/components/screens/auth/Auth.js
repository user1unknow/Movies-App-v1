import React from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Login } from "./Login"
import { Register } from "./Register"

export const Auth = () => {

    const { uid } = useSelector(state => state.auth)

    if (uid) {
        return <Redirect to="/" />
    }

    return (
        <div className="rounded m-4 row">
            <div className="col-xs-12 col-sm-12 col-md-6 ">
                <Login />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
                <Register />
            </div>
        </div>
    )
}