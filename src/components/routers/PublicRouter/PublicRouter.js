import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from '../../ui/NavBar'
import { HomeScreen } from '../../screens/HomeScreen'
import { GenreScreen } from '../../screens/genre/GenreScreen'

export const PublicRouter = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/genre/:genreName" component={GenreScreen} />
            </Switch>
        </div>
    )
}
