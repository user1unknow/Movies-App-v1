import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => isLoggedIn ? <Component /> : <Redirect to="/" />} />
    )
}
