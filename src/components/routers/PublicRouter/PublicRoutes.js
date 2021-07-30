import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />} />
    )
}
