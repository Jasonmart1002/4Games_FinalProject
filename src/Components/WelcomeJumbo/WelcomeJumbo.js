import React, {useState} from "react";
import "./WelcomeJumbo.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export function WelcomeJumbo() {
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");
    const [username,
        setUsername] = useState("");

        
    return (
        <div>
            <div className="jumbotron text-center">
                <h3 className="display-5">Welcome to Name!</h3>
                <p className="lead">
                    This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.
                </p>
                <button
                    className="btn btn-lg ripple"
                    href="/"
                    data-toggle="modal"
                    data-target="#signUpModal">
                    Sign up
                </button>
            </div>
            <div
                className="modal fade"
                id="signUpModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="signUpModalTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signUpModalTitle">
                                Sign up
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faTimesCircle}/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputUsername"
                                        aria-describedby="emailHelp"
                                        onChange={e => setUsername(e.target.value)}
                                        value={username}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword2"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail2">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail2"
                                        aria-describedby="emailHelp"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}/>
                                </div>
                                <button type="submit" className="btn btn-success">
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
