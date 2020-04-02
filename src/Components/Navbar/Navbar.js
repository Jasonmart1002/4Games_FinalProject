import React, {useState, useContext} from "react";
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {Context} from "../../Store/appContext";
import axios from 'axios'
import "./Navbar.scss";

export function Navbar() {

    const {actions} = useContext(Context);
    const [loginInformation,
        setLoginInformation] = useState({username: "", password: ""})

    const loginUser = async() => {
        try {
            const tokenRequest = await axios.post('https://games-api-4geeks.herokuapp.com/login', loginInformation)
            const tokens = tokenRequest.data
            if (!tokens.token) {
                return alert(tokens.message)
            }
            const header = {
                Authorization: `Bearer ${tokens.token}`
            }
            console.log(header)
            const requestUserInfo = await axios.get('https://games-api-4geeks.herokuapp.com/user', {headers: header})
            actions.saveLoginData(requestUserInfo.data, tokens)
        } catch (error) {
            alert('Something went wrong please try again later')
        }
    }

    const handleLogin = () => {
        for (let input in loginInformation) {
            if (loginInformation[input] === "") {
                return alert(`In order to log in please provide a valid ${input}`)
            }
        }
        loginUser()
    }

    const logoutUser = () => {
        actions.logout()
    }

console.log(store)

const loginButtonHandler = () => {

    if (store.userLogin === "") {
        return (
            <NavLink
                className="nav-link ripple"
                to="/profile/:username"
                data-toggle="modal"
                data-target="#exampleModalCenter">
                Login
            </NavLink>
        )
    } else {
        return (
            <NavLink
                className="nav-link ripple"
                to="/"
                data-target="#exampleModalCenter"
                onClick={logoutUser}>
                Logout
            </NavLink>
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
                    <li className="nav-item">
                        {loginButtonHandler()}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link ripple">
                            Profile
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
                            Topics
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="http:#.com">
                                Action
                            </a>
                            <a className="dropdown-item" href="http:#.com">
                                Action-adventure
                            </a>
                            <a className="dropdown-item" href="http:#.com">
                                Adventure
                            </a>
                            <a className="dropdown-item" href="http:#.com">
                                Sports
                            </a>
                            <a className="dropdown-item" href="http:#.com">
                                Strategy
                            </a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"/>
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