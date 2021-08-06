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
import { Error404 } from '../screens/404/Error404';

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
        return (
            <div className="mt-5 text-center">
                <h1 className="text-center fs-1 pt-5 fw-bolder animate__animated animate__flash animate__infinite animate__slower">Loading...</h1>
                <div className="spinner-border text-warning mt-5 " style={{ width: "200px", height: "200px" }} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
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
                    <Route path="*" component={Error404} />
                </Switch>
            </div>
        </Router>
    )
}
