import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from '../../ui/NavBar'
import { HomeScreen } from '../../screens/HomeScreen'

export const PublicRouter = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
            </Switch>
        </div>
    )
}
