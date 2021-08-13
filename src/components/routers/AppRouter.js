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
import { startLoadingUserCalifications } from '../../redux/actions/movies';
import { SearchScreen } from '../screens/search/SearchScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { UserCalificationScreen } from '../screens/user/califications/UserCalificationScreen';

export const AppRouter = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [checking, setChecking] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                dispatch(startLoadingUserCalifications(user.uid))
                setisLoggedIn(true)
            }
            else {
                setisLoggedIn(false)
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
            <div className="pb-4">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/auth" component={AuthScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <PrivateRoutes exact isLoggedIn={isLoggedIn} path="/califications" component={UserCalificationScreen} />
                    <Route exact path="/type/:typeMovie" component={MoviesTypeScreen} />
                    <Route exact path="/genre/:genreName" component={GenreScreen} />
                    <Route path="*" component={Error404} />
                </Switch>
            </div>
        </Router>
    )
}
