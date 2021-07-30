import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { PublicRouter } from './PublicRouter/PublicRouter';
import { PublicRoutes } from './PublicRouter/PublicRoutes';


export const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <Router>
            <div>
                <Switch>


                    <PublicRoutes isLoggedIn={isLoggedIn} component={PublicRouter} path="/" />

                </Switch>
            </div>
        </Router>
    )
}
