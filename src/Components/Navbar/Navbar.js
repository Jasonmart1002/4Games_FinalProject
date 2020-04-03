import React, {useState, useContext} from "react";
import {NavLink, withRouter, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {Context} from "../../Store/appContext";
import "./Navbar.scss";

function Navbar(props) {

    const {store, actions} = useContext(Context);
    const [loginInformation,
        setLoginInformation] = useState({username: "", password: ""})


    const loginUser = async() => {
        const username = await actions.login(loginInformation)
        props
            .history
            .push(`/profile/${username}`)
    }

    const logoutUser = () => {
        actions.logout()
    }

    const handleLogin = () => {
        for (let input in loginInformation) {
            if (loginInformation[input] === "") {
                return alert(`In order to log in please provide a valid ${input}`)
            }
        }
        loginUser()
    }

    const handleSearch = (event) => {
        const value = event.target.value;
        if(!value){ return null }
        let replaced = value.split(' ').join('-');
        if(event.key === 'Enter') {
            props.history.push(`/game_details/${replaced}`)
        }
    }

    const loadNewGame = (genre) => {
        const loadGenres = `genres=${genre}`
        actions.loadGameData(loadGenres)
    }


    const loginButtonHandler = () => {
        if (!store.userLogin) {
            return (
                <li className="nav-item">
                    <NavLink
                        className="nav-link ripple"
                        to="/"
                        data-toggle="modal"
                        data-target="#exampleModalCenter">
                        Login
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle ripple userLogoutButton"
                        to="/"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <FontAwesomeIcon icon={faUserCircle} style={{color:"rgb(255, 255, 255)"}}/>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={`/profile/${loginInformation.username}`}>
                            Profile
                        </Link>
                        <Link className="dropdown-item" to="/" onClick={logoutUser}>
                            Logout
                        </Link>
                    </div>
                </li>
            )
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link ripple">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle ripple"
                                href="http:#.com"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Genres
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/" onClick={() => loadNewGame('action')}>
                                    Action
                                </Link>
                                <Link className="dropdown-item" to="/" onClick={() => loadNewGame('puzzle')}>
                                    Puzzle
                                </Link>
                                <Link className="dropdown-item" to="/" onClick={() => loadNewGame('adventure')}>
                                    Adventure
                                </Link>
                                <Link className="dropdown-item" to="/" onClick={() => loadNewGame('sports')}>
                                    Sports
                                </Link>
                                <Link className="dropdown-item" to="/" onClick={() => loadNewGame('strategy')}>
                                    Strategy
                                </Link>
                            </div>
                        </li>
                        {loginButtonHandler()}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onKeyDown={(event) => {handleSearch(event)}}/>
                    </form>
                </div>
            </nav>
            <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">
                                Login
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faTimesCircle}/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={event => setLoginInformation({
                                        ...loginInformation,
                                        username: event.target.value
                                    })}
                                        value={loginInformation.username}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        onChange={event => setLoginInformation({
                                        ...loginInformation,
                                        password: event.target.value
                                    })}
                                        value={loginInformation.password}/>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-dismiss="modal"
                                    onClick={handleLogin}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Navbar)