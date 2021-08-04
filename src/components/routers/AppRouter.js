import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { firebase } from '../../firebase/firebase-config'
import { login } from '../../redux/actions/auth';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { GenreScreen } from '../screens/genre/GenreScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MoviesTypeScreen } from '../screens/MoviesTypeScreen';
import { NavBar } from '../ui/NavBar';

export const AppRouter = () => {
    const [checking, setChecking] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
            }
            setChecking(false)
        })
    }, [dispatch])

    if (checking) {
        return <h1>WAIT</h1>
    }

    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/auth" component={AuthScreen} />
                    <Route exact path="/type/:typeMovie" component={MoviesTypeScreen} />
                    <Route exact path="/genre/:genreName" component={GenreScreen} />
                </Switch>
            </div>
        </Router>
    )
}
