import React, { useState, useEffect} from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/movie-logo.png'
import styled from 'styled-components'
import DarkModeToggle from "react-dark-mode-toggle";
import { getGenres } from "../../helpers/getGenres";


const LogoImg = styled.img`
    width: 80px;
    height: 62px;
`
export const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [genres, setGenres] = useState([])

    useEffect(() => {
        getGenres().then(setGenres)
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light bg-gradient fw-bolder fs-5 m-3`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >
                    <LogoImg src={logo} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse  " id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto text-center ">
                        <li className="nav-item">
                            <NavLink activeClassName="active" aria-current="page" exact className="nav-link" to="/" >Movies</NavLink>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies Type
                            </a>
                            <ul className="dropdown-menu text-center dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink activeClassName="active" className="dropdown-item" exact to="/upcoming">
                                    Upcoming movies
                                </NavLink>
                                <NavLink activeClassName="active" className="dropdown-item" exact to="/top">
                                    Top movies
                                </NavLink>
                                <NavLink activeClassName="active" className="dropdown-item" exact to="/popular">
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
                            <NavLink activeClassName="active" exact className="nav-link" to="/searchMovie" >Search</NavLink>
                        </li>

                        {/* SWITCH */}
                        <li className="nav-item pt-1 pe-2 ps-1">
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={65}
                            />
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="active" exact className="nav-link" to="/SignIn" ><i className="fas fa-sign-in-alt"></i> Sign In</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
