import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/movie-logo.png'
import styled from 'styled-components'
import DarkModeToggle from "react-dark-mode-toggle";
import { getGenres } from "../../helpers/getGenres";
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';


const LogoImg = styled.img`
    width: 80px;
    height: 62px;
`
export const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [genres, setGenres] = useState([])
    const { uid } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        getGenres().then(setGenres)
    }, [])

    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light bg-gradient fw-bolder fs-5 m-3`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >
                        <LogoImg src={logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto text-center ">
                            <li className="nav-item">
                                <NavLink activeClassName="active" aria-current="page" exact className="nav-link" to="/" >Movies</NavLink>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movies Type
                                </a>
                                <ul className="dropdown-menu text-center dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">

                                    <NavLink activeClassName="active" className="dropdown-item" exact to="/type/upcoming">
                                        Upcoming movies
                                    </NavLink>
                                    <NavLink activeClassName="active" className="dropdown-item" exact to="/type/top_rated">
                                        Top movies
                                    </NavLink>
                                    <NavLink activeClassName="active" className="dropdown-item" exact to="/type/popular">
                                        Popular movies
                                    </NavLink>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genres
                                </a>
                                <ul className="dropdown-menu text-center dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        genres.map(({ id, name }) => (
                                            <NavLink key={id} activeClassName="active" to={`/genre/${name}`} className="dropdown-item">
                                                {name}
                                            </NavLink>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" exact className="nav-link" to="/search" >Search</NavLink>
                            </li>


                            {
                                !uid ?
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" exact className="nav-link" to="/auth" ><i className="fas fa-sign-in-alt"></i> Sign In</NavLink>
                                    </li>
                                    :

                                    <li className="nav-item dropdown ">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            User
                                        </a>
                                        <ul className="dropdown-menu text-center dropdown-menu-dark dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">

                                            <NavLink activeClassName="active" className="dropdown-item" exact to="/type/upcoming">
                                                <i className="fas fa-film"></i> Your Movies
                                            </NavLink>
                                            <NavLink activeClassName="active" className="dropdown-item" exact to="/type/top_rated">
                                                <i className="far fa-star"></i> Califications
                                            </NavLink>
                                            <NavLink activeClassName="active" onClick={handleLogout} className="dropdown-item bg-danger" exact to="/type/popular">
                                                <i className="fas fa-sign-in-alt"></i> Sign out
                                            </NavLink>

                                        </ul>
                                    </li>
                            }

                            <li className="nav-item pt-1 pe-2 ps-1">
                                <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={65}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
